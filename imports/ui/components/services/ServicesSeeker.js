import React from "react";
import { Link } from "react-router-dom";
import { ServicesCollection } from "../../../api/services/services";
import { Table, Tag, Space } from "antd";
import { MdDoneAll } from "react-icons/md";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useTracker } from "meteor/react-meteor-data";
import { FiEdit } from "react-icons/fi";
import moment from "moment";
const columns = [
  {
    title: "Nom du prestataire",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      return status ? (
        <div className="status Finish">
          <MdDoneAll style={{ fontSize: "20px" }} />
        </div>
      ) : (
        <div className="status notFinish">
          <HighlightOffIcon></HighlightOffIcon>
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

const ServicesSeeker = () => {
  const services = useTracker(() => {
    Meteor.subscribe("services");

    return ServicesCollection.find({ seeker: Meteor.userId() }).fetch();
  });
  const data = useTracker(() => {
    return services?.map((service, index) => {
      Meteor.subscribe("allUsers");
      const provider = Meteor.users.findOne(service.provider);

      return {
        key: `${index}`,
        name: `${provider?.profile?.name} ${provider?.profile?.lastName}`,
        description: service.description,
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
 
  return (
    <div className="contain">
      <Table
        columns={columns}
        dataSource={services}
        onChange={onChange}
        className="tab"
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
  );
};

export default ServicesSeeker;
