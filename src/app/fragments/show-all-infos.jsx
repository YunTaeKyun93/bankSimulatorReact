import React from "react";
import ShowAllInfoModal from "./../../modals/show-all-info/index";

const ShowAllInfos = ({ logic }) => {
  return (
    <ShowAllInfoModal
      isOpen={logic.isShowAllInfoModalOpen}
      onRequestClose={() => logic.setIsShowAllInfoModalOpen(false)}
      showAllInfo={({ userId, bankId }) => {
        logic.showAllInfo({ userId, bankId });
      }}
      banking={logic.banking}
    />
  );
};

export default ShowAllInfos;
