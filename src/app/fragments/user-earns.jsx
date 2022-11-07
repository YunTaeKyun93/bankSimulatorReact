import React from "react";
import UserEarnsModal from "../../modals/user-earns";

const UserEarns = ({ logic }) => {
  return (
    <UserEarnsModal
      isOpen={logic.isUserEarnsModalOpen}
      onRequestClose={() => logic.setIsUserEarnsModalOpen(false)}
      userEarns={({ userId, amount }) => {
        logic.userEarns({ userId, amount });
      }}
      banking={logic.banking}
    />
  );
};

export default UserEarns;
