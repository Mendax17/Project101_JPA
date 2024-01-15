import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function Test() {
  return (
    <>
      <div
        className="content"
        style={{
          boxSizing: "border-box",
          padding: "78px 30px 30px 280px",
          minHeight: "calc(100vh - 70px)",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <div
          className="row"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            marginRight: "-15px",
            marginLeft: "-15px",
          }}
        >
          <div
            className="col-md-12 col-lg-6"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
            }}
          >
            <div
              className="card"
              style={{
                boxSizing: "border-box",
                borderRadius: "0.2857rem",
                display: "flex",
                flexDirection: "column",
                minWidth: "0px",
                overflowWrap: "break-word",
                background: "rgb(39, 41, 61)",
                border: "0px",
                backgroundClip: "initial",
                backgroundColor: "rgb(39, 41, 61)",
                position: "relative",
                width: "100%",
                marginBottom: "30px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 20px 0px",
              }}
            >
              <div
                className="card-header"
                style={{
                  boxSizing: "border-box",
                  borderBottom: "0.0625rem solid rgba(34, 42, 66, 0.05)",
                  marginBottom: "0px",
                  borderRadius: "calc(0.2232rem) calc(0.2232rem) 0px 0px",
                  padding: "15px 15px 0px",
                  border: "0px",
                  color: "rgba(255, 255, 255, 0.8)",
                  backgroundColor: "transparent",
                }}
              >
                <h4 className="card-title"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontFamily: "inherit",
                    fontSize: "1.0625rem",
                    lineHeight: "1.45em",
                    marginBottom: "0.75rem",
                    color: "rgb(255, 255, 255)",
                    fontWeight: 100,
                  }}
                >냉장고 추가</h4>
              </div>
              <div
                className="card-body"
                style={{
                  boxSizing: "border-box",
                  flex: "1 1 auto",
                  minHeight: "1px",
                  padding: "15px",
                }}
              >
                <div
                  className="table-responsive ps"
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "100%",
                    paddingBottom: "10px",
                    overflowAnchor: "none",
                    touchAction: "auto",
                    overflow: "hidden",
                    overflowX: "hidden",
                  }}
                >
                  <table
                    className="tablesorter table"
                    style={{
                      boxSizing: "border-box",
                      borderCollapse: "collapse",
                      width: "100%",
                      marginBottom: "1rem",
                      color: "rgb(82, 95, 127)",
                      backgroundColor: "transparent",
                    }}
                  >
                    <thead
                      className="text-primary"
                      style={{
                        boxSizing: "border-box",
                        color: "rgb(225, 78, 202)",
                      }}
                    >
                      <tr style={{ boxSizing: "border-box" }}>
                        <th
                          style={{
                            boxSizing: "border-box",
                            textAlign: "-webkit-match-parent",
                            borderTop: "0.0625rem solid rgb(227, 227, 227)",
                            borderBottom: "0.125rem solid rgb(227, 227, 227)",
                            border: "0px",
                            fontSize: "12px",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            color: "rgba(255, 255, 255, 0.7)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            padding: "12px 7px",
                            verticalAlign: "middle",
                          }}
                        >
                          제품명
                        </th>
                        <th
                          style={{
                            boxSizing: "border-box",
                            textAlign: "-webkit-match-parent",
                            borderTop: "0.0625rem solid rgb(227, 227, 227)",
                            borderBottom: "0.125rem solid rgb(227, 227, 227)",
                            border: "0px",
                            fontSize: "12px",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            color: "rgba(255, 255, 255, 0.7)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            padding: "12px 7px",
                            verticalAlign: "middle",
                          }}
                        >
                          수량
                        </th>
                        <th
                          style={{
                            boxSizing: "border-box",
                            textAlign: "-webkit-match-parent",
                            borderTop: "0.0625rem solid rgb(227, 227, 227)",
                            borderBottom: "0.125rem solid rgb(227, 227, 227)",
                            border: "0px",
                            fontSize: "12px",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            color: "rgba(255, 255, 255, 0.7)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            padding: "12px 7px",
                            verticalAlign: "middle",
                          }}
                        >
                          City
                        </th>
                        <th
                          className="text-center"
                          style={{
                            boxSizing: "border-box",
                            borderTop: "0.0625rem solid rgb(227, 227, 227)",
                            borderBottom: "0.125rem solid rgb(227, 227, 227)",
                            border: "0px",
                            fontSize: "12px",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            color: "rgba(255, 255, 255, 0.7)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            padding: "12px 7px",
                            verticalAlign: "middle",
                            textAlign: "center",
                          }}
                        >
                          유통기한
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ boxSizing: "border-box" }}>
                      <tr
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                        }}
                      >
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderTop: "0.0625rem solid rgb(227, 227, 227)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            padding: "12px 7px",
                            verticalAlign: "middle",
                            color: "rgba(255, 255, 255, 0.7)",
                          }}
                        >
                          우유
                        </td>
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderTop: "0.0625rem solid rgb(227, 227, 227)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            padding: "12px 7px",
                            verticalAlign: "middle",
                            color: "rgba(255, 255, 255, 0.7)",
                          }}
                        >
                          1
                        </td>
                        <td
                          style={{
                            boxSizing: "border-box",
                            borderTop: "0.0625rem solid rgb(227, 227, 227)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            padding: "12px 7px",
                            verticalAlign: "middle",
                            color: "rgba(255, 255, 255, 0.7)",
                          }}
                        >
                          Oud-Turnhout
                        </td>
                        <td
                          className="text-center"
                          style={{
                            boxSizing: "border-box",
                            borderTop: "0.0625rem solid rgb(227, 227, 227)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            padding: "12px 7px",
                            verticalAlign: "middle",
                            textAlign: "center",
                            color: "rgba(255, 255, 255, 0.7)",
                          }}
                        >
                          {/* $36,738 */}
                          <Box>
                          <Slider
                            aria-label="Custom marks"
                            defaultValue={20}
                            getAriaValueText={valuetext}
                            step={10}
                            valueLabelDisplay="auto"
                            marks={marks}
                          />
                        </Box>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                  <div
                    className="ps__rail-x"
                    style={{
                      boxSizing: "border-box",
                      transition:
                        "background-color 0.2s linear 0s, opacity 0.2s linear 0s",
                      display: "none",
                      opacity: 0,
                      height: "15px",
                      position: "absolute",
                      left: "0px",
                      bottom: "0px",
                    }}
                  >
                    <div
                      className="ps__thumb-x"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "6px",
                        transition:
                          "background-color 0.2s linear 0s, height 0.2s ease-in-out 0s",
                        backgroundColor: "rgb(170, 170, 170)",
                        height: "6px",
                        bottom: "2px",
                        position: "absolute",
                        left: "0px",
                        width: "0px",
                      }}
                    />
                  </div>
                  <div
                    className="ps__rail-y"
                    style={{
                      boxSizing: "border-box",
                      transition:
                        "background-color 0.2s linear 0s, opacity 0.2s linear 0s",
                      display: "none",
                      opacity: 0,
                      width: "15px",
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                    }}
                  >
                    <div
                      className="ps__thumb-y"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "6px",
                        transition:
                          "background-color 0.2s linear 0s, width 0.2s ease-in-out 0s",
                        backgroundColor: "rgb(170, 170, 170)",
                        width: "6px",
                        right: "2px",
                        position: "absolute",
                        top: "0px",
                        height: "0px",
                      }}
                    />
                  </div>
                  <div
                    className="ps__rail-x"
                    style={{
                      boxSizing: "border-box",
                      transition:
                        "background-color 0.2s linear 0s, opacity 0.2s linear 0s",
                      display: "none",
                      opacity: 0,
                      height: "15px",
                      position: "absolute",
                      left: "0px",
                      bottom: "0px",
                    }}
                  >
                    <div
                      className="ps__thumb-x"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "6px",
                        transition:
                          "background-color 0.2s linear 0s, height 0.2s ease-in-out 0s",
                        backgroundColor: "rgb(170, 170, 170)",
                        height: "6px",
                        bottom: "2px",
                        position: "absolute",
                        left: "0px",
                        width: "0px",
                      }}
                    />
                  </div>
                  <div
                    className="ps__rail-y"
                    style={{
                      boxSizing: "border-box",
                      transition:
                        "background-color 0.2s linear 0s, opacity 0.2s linear 0s",
                      display: "none",
                      opacity: 0,
                      width: "15px",
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                    }}
                  >
                    <div
                      className="ps__thumb-y"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "6px",
                        transition:
                          "background-color 0.2s linear 0s, width 0.2s ease-in-out 0s",
                        backgroundColor: "rgb(170, 170, 170)",
                        width: "6px",
                        right: "2px",
                        position: "absolute",
                        top: "0px",
                        height: "0px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(34, 42, 66, 0);
}

body {
  box-sizing: border-box;
  margin: 0px;
  font-family: Poppins, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(82, 95, 127);
  text-align: left;
  background-color: rgb(30, 30, 47);
  -webkit-font-smoothing: antialiased;
}
`,
        }}
      />
    </>
  );
}
