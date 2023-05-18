{/* <div className="profile_right_side">
        <div className="propety-details-box propety-details-box22">
          <div className="tab-frame verify-frame">
            <div className="clearfix dashboard-clear">
              <input
                type="radio"
                name="tab"
                id="tab1"
                checked={state.tab == "tab1"}
                onClick={() => setState({ tab: "tab1" })}
              />
              <label for="tab1">Uploaded Listings</label>

              <input
                type="radio"
                name="tab"
                id="tab2"
                checked={state.tab == "tab2"}
                onClick={() => setState({ tab: "tab2" })}
              />
              <label for="tab2">Sold Listings</label>
            </div>

            {state.tab == "tab1" && (
              <div className="Uploaded-Listings-online mt-4">
                <div className="listing_card">
                  {/*There we will Define Data Uploaded list*/}
                  {
                    // uploadPropeties?
                    uploadPropeties.map((val, key) => {
                      return (
                        <Fade key={key} bottom cascade collapse>
                          <div className="listing_texts">
                            <div className="listed-img position-relative">
                              <span className="listed-tag">Listed</span>
                              <img src={val.propertyImages[0].imgUrl} />
                            </div>
                            <div className="listing_right">
                              <div>
                                <p className="m-0 price_text d-flex justify-content-between">
                                  $ {val.offerPrice}{" "}
                                  
                                  <div onClick={() => console.log("Chalpa")}>
                                    <span className="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="#999999"
                                        className="bi bi-three-dots-vertical"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                      </svg>{" "}
                                    </span>
                                  </div>
                                </p>
                                <p className=" bhk_title">
                                  {val.propertyType === "Residential"
                                    ? `${val.residentialBedroomCount} Bedrooms ${val.residentialStyle} ${val.residentialType} on ${val.residentialTenure}`
                                    : val.propertyType === "Commercial"
                                    ? `${val.commercialType} on ${val.commercialTenure}`
                                    : `${val.landSizeInAcres} Acres Land on ${val.landTenure}`}
                                  {/* 3 BHK Flat */}
                                </p>
                                <p className="listing_subtitle">
                                  <svg
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--mdi"
                                    width="18"
                                    height="18"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="#3399FF"
                                      d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                                    />
                                  </svg>
                                  11 Save
                                </p>
                                <p className="listing_subtitle">
                                  <svg
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--ic"
                                    width="18"
                                    height="18"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="#3399FF"
                                      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
                                    />
                                  </svg>
                                  566 views
                                </p>
                                <p className="listing_subtitle">
                                  <svg
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--typcn"
                                    width="18"
                                    height="18"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="#3399FF"
                                      d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13zM12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732z"
                                    />
                                  </svg>
                                  {val.address}
                                </p>
                              </div>
                              <div className="d-flex gap-3 listing_action_btn">
                                <Link
                                  to="/profile/details-page"
                                  className="property_btn not_active"
                                >
                                  Preview ad
                                </Link>
                                <a href="#" className="property_btn">
                                  Edit Details
                                </a>
                              </div>
                            </div>
                          </div>
                        </Fade>
                      );
                    })
                  }
                </div>
              </div>
            )}

            {state.tab == "tab2" && (
              <div className="Sold-Listings-online mt-4">
                <div className="listing_card">
                  {soldProperties.map((val, key) => {
                    return (
                      <Fade key={key} bottom cascade collapse>
                        <div className="listing_texts">
                          <div className="image-sold-div position-relatve">
                            <span className="sold-badge">
                              <svg
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                width="18"
                                height="18"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ffffff"
                                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                />
                              </svg>
                              <p>Sold</p>
                            </span>
                            <img src={val.propertyImages[0].imgUrl} />
                          </div>

                          <div className="listing_right">
                            <div>
                              <p className="m-0 price_text d-flex justify-content-between">
                                $ {val.offerPrice}{" "}
                                <span className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#999999"
                                    className="bi bi-three-dots-vertical"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                  </svg>{" "}
                                </span>
                              </p>
                              <p className=" bhk_title">
                                {val.propertyType === "Residential"
                                  ? `${val.residentialBedroomCount} Bedrooms ${val.residentialStyle} ${val.residentialType} on ${val.residentialTenure}`
                                  : val.propertyType === "Commercial"
                                  ? `${val.commercialType} on ${val.commercialTenure}`
                                  : `${val.landSizeInAcres} Acres Land on ${val.landTenure}`}
                                {/* 3 BHK Flat */}
                              </p>
                              <p className="listing_subtitle">
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  className="iconify iconify--mdi"
                                  width="18"
                                  height="18"
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="#3399FF"
                                    d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                                  />
                                </svg>
                                11 Save
                              </p>
                              <p className="listing_subtitle">
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  className="iconify iconify--ic"
                                  width="18"
                                  height="18"
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="#3399FF"
                                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
                                  />
                                </svg>
                                566 views
                              </p>
                              <p className="listing_subtitle">
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  className="iconify iconify--typcn"
                                  width="18"
                                  height="18"
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="#3399FF"
                                    d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13zM12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732z"
                                  />
                                </svg>
                                {val.address}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Fade>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>