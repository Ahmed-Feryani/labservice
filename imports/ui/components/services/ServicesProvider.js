import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ServicesCollection } from "../../../api/services/services";
import { Table, Tag, Space } from "antd";
import { FiEdit } from "react-icons/fi";
import { MdDoneAll } from "react-icons/md";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useTracker } from "meteor/react-meteor-data";
import moment from "moment";
const columns = [
  {
    title: "Nom du client",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text) => {
      return (
        <div
          style={{
            maxWidth: "45rem",
          }}
        >
          {text}
        </div>
      );
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Addresse",
    dataIndex: "addresse",
    key: "addresse",
  },
  {
    title: "Num° tel",
    dataIndex: "tel",
    key: "tel",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      console.log("this is status:::", status);
      return status ? (
        <div className="status Finish">
          <MdDoneAll style={{ fontSize: "20px" }} />
        </div>
      ) : (
        <div className="status notFinish">
          {" "}
          <HighlightOffIcon></HighlightOffIcon>{" "}
        </div>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: (id) => (
      <div size="middle">
        <div className="nnff">
          <Link to={`/service/${id}`}>
            <FiEdit className="ed" />
          </Link>
        </div>
      </div>
    ),
  },
];

const ServicesProvider = () => {
  const [filter, setfilter] = useState("all");
  const services = useTracker(() => {
    Meteor.subscribe("services");

    return filter === "all"
      ? ServicesCollection.find({ provider: Meteor.userId() }).fetch()
      : filter === "pending"
      ? ServicesCollection.find({
          provider: Meteor.userId(),
          isFinished: false,
        }).fetch()
      : ServicesCollection.find({
          provider: Meteor.userId(),
          isFinished: true,
        }).fetch();
  });
  const data = useTracker(() => {
    return services?.map((service, index) => {
      Meteor.subscribe("allUsers");
      const seeker = Meteor.users.findOne(service.seeker);

      return {
        key: `${index}`,
        name: `${seeker?.profile.name} ${seeker?.profile?.lastName}`,
        description: service.description,
        addresse: service.address_user.address,
        tel: service.phone_user,
        date: `${moment(service.createdAt).format("MM-DD-YYYY")} at ${moment(
          service.createdAt
        ).format("hh:mm")}`,

        status: service.isFinished,
        action: service._id,
      };
    });
  });
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const filterHandler = (e) => {
    setfilter(e.target.value);
  };

  return (
    <div className="contain">
      <div className="tab">
        <div className="contain__select">
          <select onChange={(e) => filterHandler(e)}>
            <option value="all">all</option>
            <option value="pending">pending</option>
            <option value="finished">finished</option>
          </select>
        </div>

        <Table
          columns={columns}
          dataSource={services}
          onChange={onChange}
          bordered
          pagination={{
            defaultPageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "20", "30"],
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default ServicesProvider;
