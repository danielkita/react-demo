import React, { useEffect, useState } from "react";
import serverStatus from "../../../back-end/serverStatus";
import { Modal } from "../modal/modal";

interface Props {
  type?: 401 | 500;
}

const messages = {
  [serverStatus.UNAUTHORIZED]: "You are not authorised",
  [serverStatus.INTERNAL_SERVER_ERROR]:
    "Something went wrong - internal server error",
};

export const Errors: React.FC<Props> = ({ type }) => {
  const [active, setActive] = useState(!!type);
  useEffect(() => {
    if (!!type) {
      setActive(true);
    }
  }, [type]);

  const onClose = () => {
    setActive(false);
  };

  return (
    <>
      {type && (
        <Modal active={active} onClose={onClose}>
          {messages[type]}
        </Modal>
      )}
    </>
  );
};
