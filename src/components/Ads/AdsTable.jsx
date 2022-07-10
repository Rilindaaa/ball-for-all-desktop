import * as React from "react";
import styles from "./AdsTable.module.scss";
import Ad from "./Ad/Ad";

export default function AdsTable({ ads, setAds }) {
  return (
    <div className={styles.ads}>
      {ads?.map((ad, i) => (
        <Ad ad={ad} setAds={setAds} ads={ads} />
      ))}
    </div>
  );
}
