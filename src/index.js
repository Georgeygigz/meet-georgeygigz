import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetails";
import faker from "faker";
import ApprovalCard from './components/ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail
        author="Sam"
        time="6:30"
        comment="I love it"
        image={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Jane"
        time="12:00"
        comment="Hello I love it"
        image={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Gigz"
        time="20:00"
        comment="Hello its lit"
        image={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
