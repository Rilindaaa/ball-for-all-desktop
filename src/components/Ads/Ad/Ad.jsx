import * as React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import { deleteAd } from "../../../api/ApiMethods";
import styles from "./Ad.module.scss";
import { useState } from "react";
import EditAd from "./../EditAd/EditAd";
import { ReactComponent as Check } from "../../../assets/svg/checkmark.svg";
import { ReactComponent as XMark } from "../../../assets/svg/x-mark.svg";
import { useConfirm } from "material-ui-confirm";

export default function Ad({ ad, setAds, ads }) {
  const [showFormModal, setShowFormModal] = useState(false);
  const confirm = useConfirm();

  const handleDeleteAds = async (adId) => {
    confirm({
      description: "Are you sure you want to delete this ad?",
    }).then(async () => {
      const res = await deleteAd(adId);
      if (res.status === 200) setAds(ads.filter(({ id }) => id !== adId));
    });
  };
  return (
    <div className={styles.ad} key={ad.id}>
      <div className={styles.header}>
        <h2>{ad.title}</h2>
        <div>
          <CustomButton
            label="Edit"
            variant="outlined"
            color="#f4b61c"
            onClick={() => setShowFormModal(true)}
            containerStyle={{
              width: "90px",
              height: "40px",
              marginRight: "10px",
            }}
            labelStyle={{ fontSize: "12px" }}
          />
          <CustomButton
            label="Delete"
            variant="outlined"
            color="#ff0000"
            onClick={() => handleDeleteAds(ad.id)}
            containerStyle={{ width: "90px", height: "40px" }}
            labelStyle={{ fontSize: "12px" }}
          />
        </div>
      </div>
      <div className={styles.description}>
        <h4>Description:</h4>
        <p>{ad?.description}</p>
      </div>
      <div className={styles.characteristics}>
        <div className={styles.characteristicsLabel}>
          <span>URL:</span>
          <span>Order:</span>
          <span>Active:</span>
          <span>Views:</span>
          <span>Clicks:</span>
        </div>
        <div className={styles.characteristicsValue}>
          <span>
            <a href={ad?.url}>{ad?.url}</a>
          </span>
          <span>{ad?.order}</span>
          <span>
            {ad.active ? (
              <Check className={styles.checkmark} />
            ) : (
              <XMark className={styles.xmark} />
            )}
          </span>
          <span>{ad?.views}</span>
          <span>{ad?.clicks}</span>
        </div>
      </div>
      <img src={ad.image} alt={ad.description} className={styles.image} />
      <EditAd
        editAd={ad}
        ads={ads}
        setAds={setAds}
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
      />
    </div>
  );
}
