import React from "react";
import UserUsesModal from "./../../modals/user-uses/index";

const UserUses = ({ logic }) => {
  return (
    <UserUsesModal
      isOpen={logic.isUserUsesModalOpen}
      onRequestClose={() => logic.setIsUserUsesModalOpen(false)}
      userUses={({ userId, amount }) => {
        logic.userUses({ userId, amount });
      }}
      banking={logic.banking}
    />
  );
};

export default UserUses;
