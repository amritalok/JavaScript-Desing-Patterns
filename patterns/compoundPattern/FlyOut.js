import React from "react";
import Icon from "./Icon";

export function FlyOut(props) {
  const [open, toggle] = React.useState(false);

  /*
    React.children accepts two params. the children prop and a function which will iterate over each child.
    React.cloneElement accepts three params. child: which is the child we are cloning, second paramter is additional
    props we are passing to the cloned element and third param is the any children of the `child`.
  */
  return (
    <div className={`flyout`}>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, { open, toggle })
      )}
    </div>
  );
}

function Toggle({ open, toggle }) {
  return (
    <div className="flyout-btn" onClick={() => toggle(!open)}>
      <Icon />
    </div>
  );
}

function List({ children, open }) {
  return open && <ul className="flyout-list">{children}</ul>;
}

function Item({ children }) {
  return <li className="flyout-item">{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
