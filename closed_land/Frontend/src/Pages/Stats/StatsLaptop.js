import { Container, Col, Row, Button } from "react-bootstrap";
import "./Stats.css";
import { FaEthereum } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const StatsLaptop = () => {
  let defCol = {
    ImgUrl:
      "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s130",
    Name: "Doodles",
    StatsFloorPrice: 12.7498,
    StatsOneDayChg: -0.06642826407543108,
    StatsSevenDayChg: -0.22917061264882083,
    StatsNumOwners: 6058,
    StatsCount: 10000,
    StatsTotalVolume: 81902.37776033413,
  };

  const [key, setKey] = useState(null);
  const [buttonText, setButtonText] = useState("Collection");
  let temp = [];

  const [data, setData] = useState([
    {
      data: {
        avgPrice24hr: 0,
        oneDayChange: 0,
        sevenDayChange: 0,
        floorPrice: 0,
        listedCount: 0,
        symbol: "",
        volumeAll: 0,
      },
      image:
        "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s130",
      name: "No Name",
    },
  ]);

  useEffect(() => {
    axios
      .get("https://api-mainnet.magiceden.dev/v2/collections?offset=0&limit=10")
      .then((res) => {
        res.data.forEach((e) => {
          axios
            .get(
              `https://api-mainnet.magiceden.dev/v2/collections/${e.symbol}/stats`
            )
            .then((res2) => {
              let obj = { name: e.name, image: e.image, data: res2.data };
              temp.push(obj);
              if (temp.length === 10) {
                setData(temp);
              }
            });
        });
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    switch (buttonText) {
      case "24h%":
        setButtonText(buttonText);
        data.sort(function (a, b) {
          if (a.data.oneDayChange < b.data.oneDayChange) {
            return -1;
          }
          if (a.data.oneDayChange > b.data.oneDayChange) {
            return 1;
          }
        });
        break;
      case "7d%":
        setButtonText(buttonText);
        data.sort(function (a, b) {
          if (a.data.sevenDayChange < b.data.sevenDayChange) {
            return -1;
          }
          if (a.data.sevenDayChange > b.data.sevenDayChange) {
            return 1;
          }
          return 0;
        });
        break;
      case "Volume":
        setButtonText(buttonText);
        data.sort(function (a, b) {
          if (a.data.volumeAll < b.data.volumeAll) {
            return -1;
          }
          if (a.data.volumeAll > b.data.volumeAll) {
            return 1;
          }
          return 0;
        });
        break;
      case "Floor Price":
        setButtonText(buttonText);
        data.sort(function (a, b) {
          if (a.data.floorPrice < b.data.volumeAll) {
            return -1;
          }
          if (a.data.volumeAll > b.data.volumeAll) {
            return 1;
          }
          return 0;
        });
        break;

      case "Collection":
        setButtonText(buttonText);
        data.sort((a, b) => a.name - b.name);
        break;

      case "Owners":
        setButtonText(buttonText);
        data.sort(function (a, b) {
          if (a.data.avgPrice24hr < b.data.avgPrice24hr) {
            return -1;
          }
          if (a.data.avgPrice24hr > b.data.avgPrice24hr) {
            return 1;
          }
          return 0;
        });
        break;

      case "Items":
        setButtonText(buttonText);
        data.sort(function (a, b) {
          if (a.data.listedCount < b.data.listedCount) {
            return -1;
          }
          if (a.data.listedCount > b.data.listedCount) {
            return 1;
          }
          return 0;
        });
        break;

      default:
        break;
    }
  }, [buttonText]);

  const nFormatter = (num) => {
    num = num.toString().replace(/[^0-9.]/g, "");
    if (num < 1000) {
      return num;
    }
    let si = [
      { v: 1e3, s: "K" },
      { v: 1e6, s: "M" },
      { v: 1e9, s: "B" },
      { v: 1e12, s: "T" },
      { v: 1e15, s: "P" },
      { v: 1e18, s: "E" },
    ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
      if (num >= si[index].v) {
        break;
      }
    }
    return (
      (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
      si[index].s
    );
  };

  return (
    <div className="statsPageLaptop">
      <Container className="statsTitleLaptop animate__animated animate__fadeIn animate__delay-1s">
        <Row>
          <h1>STATS</h1>
        </Row>
        <Row>
          <h2>Top NFT Collections in ClosedLand</h2>
        </Row>
      </Container>
      <Row>
        <Container className="statsPageTableLaptop">
          <Row className="statsButtonGroup gx-0 animate__animated animate__fadeIn animate__delay-2s">
            <Col className="statsButtonColName" xs={4}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Collection
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={2}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Volume
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={1}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                24h%
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={1}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                7d%
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={2}>
              <Button
                className="statsButtonFloor"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Floor Price
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={1}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Owners
              </Button>
            </Col>
            <Col className="statsButtonCol" xs={1}>
              <Button
                className="statsButton"
                onClick={(e) => setButtonText(e.target.textContent)}
              >
                Items
              </Button>
            </Col>
          </Row>
          {data.map((col, index) => {
            return (
              <Row
                key={index}
                className="statsTableRowLaptop gx-0 animate__animated animate__bounceIn animate__delay-2s"
              >
                <Col className="statsTableTextLaptop" id="statsNumRow" xs={4}>
                  <Col id="sNumLaptop" className="" xs={2}>
                    <h1>{index + 1}</h1>
                  </Col>
                  <Col className="statsRowImageLaptop" xs={2}>
                    <img
                      className="statsTableImageLaptop"
                      src={col.image !== "NULL" ? col.image : defCol.ImgUrl}
                      alt=""
                    />
                  </Col>
                  <Col className="statsRowNameLaptop" xs={8}>
                    <p id="statsNameLaptop">{col.name}</p>
                  </Col>
                </Col>
                <Col className="rowStatsPageLaptop" xs={2}>
                  <p>
                    <FaEthereum className="eth" />
                    {(col.data.volumeAll / 1000000000).toFixed(2)}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop" xs={1}>
                  <p
                    style={{
                      color:
                        (col.data.oneDayChange / 1000000000).toFixed(2) > 0
                          ? "#1BC000"
                          : "#C00000",
                    }}
                  >
                    {(col.data.floorPrice / 1000000000).toFixed(2) + " %"}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop" xs={1}>
                  <p
                    style={{
                      color:
                        (col.data.sevenDayChange / 1000000000).toFixed(2) > 0
                          ? "#1BC000"
                          : "#C00000",
                    }}
                  >
                    {(col.data.sevenDayChange / 1000000000).toFixed(2) + " %"}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop" xs={2}>
                  <p>
                    <FaEthereum className="eth" />
                    {(col.data.floorPrice / 1000000000).toFixed(2)}
                  </p>
                </Col>
                <Col className="rowStatsPageLaptop" xs={1}>
                  <p> {(col.data.avgPrice24hr / 1000000000).toFixed(2)}</p>
                </Col>
                <Col className="rowStatsPageLaptop" xs={1}>
                  <p> {nFormatter(col.data.listedCount)}</p>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Row>
    </div>
  );
};

export default StatsLaptop;
