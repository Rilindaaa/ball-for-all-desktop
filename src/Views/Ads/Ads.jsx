import React, { useEffect, useState } from "react";
import styles from "./Ads.module.scss";
import AdsTable from "../../components/Ads/AdsTable";
import { getAllAds } from "../../api/ApiMethods";
import { CircularProgress } from "@mui/material";
import { ReactComponent as Plus } from "../../assets/svg/plus.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import CreateAd from "../../components/Ads/CreateAd/CreateAd";

export default function Ads() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAds = async (id) => {
    setLoading(true);
    try {
      const ads = await getAllAds();
      setAds(ads.data);
      console.log("ads", ads.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.topText}>Ads</p>
        <CustomButton
          label={"Add new"}
          containerStyle={{ width: "130px" }}
          labelStyle={{ fontSize: 16 }}
          startIcon={<Plus className={styles.plusIcon} />}
          onClick={() => setShowFormModal(true)}
        />
      </div>
      {!loading ? (
        ads?.length ? (
          <AdsTable ads={ads} setAds={setAds} />
        ) : (
          <h4>No ads found!</h4>
        )
      ) : (
        <CircularProgress size={55} style={{ alignSelf: "center" }} />
      )}
      <CreateAd
        setAds={setAds}
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
      />
    </div>
  );
}
