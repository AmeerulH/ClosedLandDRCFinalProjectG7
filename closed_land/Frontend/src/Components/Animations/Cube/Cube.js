import "./Cube.css";
import Cube from "react-3d-cube";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CarLoader from "../CarLoading/CarLoader";

const LogoCube = () => {
  const [col, setCol] = useState([]);
  const [assets, setAssets] = useState([]);
  let temp = [];

  let altAssets = [
    {
      image:
        "https://lh3.googleusercontent.com/PWZaqY9OXEJA2AtbYqXl1jMHWs27Uk2kEs-sRcrGCmscBxKMeNswOIriW6TvV71sG1IJ-o8tllsLarmVq2mky28pipLVwAHgKSWd=w301",
    },
    {
      image:
        "https://lh3.googleusercontent.com/He_g8Ne0IYAOYrJWIoa-nd-bNCimHd2kiU4Wz2tuzX9fO83U8dcZwH3aADKswvPVqQvWXPm-jqUIYTC7qrETj88VLWMRXhKf5a_irkM=w301",
    },
    {
      image:
        "https://lh3.googleusercontent.com/GWqi_hkZ01enfcGA12p3MUUgM34OCWJvtJBuGwk9AsUhB-lz-6t6FFgJGnVtnah5LARWX3Rg2xqw1JGpDkFh88_dk85N9O3tAin6gQ=w600",
    },
    {
      image:
        "https://lh3.googleusercontent.com/v1UkPH1QhG3NnFNuRybll59QoKrJkKB_hb7UmusyZaRXB5LkwLIZcFHjcZKCxdFIwzs8r9VJT0V40-A5XBLtWUYy-7Qk8zsfagmiDQ=w301",
    },
    {
      image:
        "https://lh3.googleusercontent.com/tQnHFx1FuJXs1-2ywfh5tfRGqJ0j8uefY60c34qvkSsluKKdEcLUf9EG-97R4iLthgGq-if42S1vJFi7zQ8KuS-GyWL9vUAk1I5m1Jw=w301",
    },
    {
      image:
        "https://lh3.googleusercontent.com/PmRyUrZPzKFDXZdhxa8MxDXM8TJ6U5iBlVYGMCMqFetiaWmBYG-31cvTBUcfzREfVs_ojubWAeuRzRYdGHMhnELN9VALTLyajMU-kic=w301",
    },
  ];

  useEffect(() => {
    let rand = Math.floor(Math.random() * 100 + 10);

    axios
      .get(
        `https://api-mainnet.magiceden.dev/v2/collections?offset=${rand}&limit=1`
      )
      .then((res) => {
        axios
          .get(
            `https://api-mainnet.magiceden.dev/v2/collections/${res.data[0].symbol}/listings?offset=0&limit=6`
          )
          .then((res2) => {
            setCol(res2.data);
          });
      });
  }, []);

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      if (col[i] !== undefined) {
        axios
          .get(
            `https://api-mainnet.magiceden.dev/v2/tokens/${col[i].tokenMint}`
          )
          .then((res) => {
            temp.push(res.data);
            if (temp.length === 6) {
              setAssets(temp);
            }
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [col]);

  return (
    <div className="cubeComponent">
      <div
        // className="cubeSize"
        style={{
          width: 500,
          height: 500,
        }}
      >
        {assets?.length !== 0 ? (
          <Cube size={500} index="front">
            {assets.map((asset, index) => {
              return (
                <div key={index}>
                  <img
                    style={{
                      width: 500,
                      height: 500,
                      objectFit: "cover",
                    }}
                    src={asset.image !== null ? asset.image : altAssets[index]}
                    alt="hi"
                  />
                </div>
              );
            })}
          </Cube>
        ) : (
          <div className="cubeCarCenter">
            <CarLoader />
          </div>
        )}
      </div>
    </div>
  );
};
export default LogoCube;
