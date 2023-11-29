import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PaginationList = () => {
  const [dataLength, setDataLength] = useState(0);
  const [productList, setProductList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      setSkip((val) => val + 10);
      const data = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`
      );

      setProductList((prevList) => [...prevList, ...data?.data?.products]);
      setDataLength(data?.data?.total);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., show a message to the user
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Trigger the effect whenever the 'skip' value changes

  return (
    <div>
      <InfiniteScroll
        dataLength={productList.length} // Use the length of the productList array
        next={getData}
        hasMore={productList.length < dataLength} // Check if there's more data to fetch
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {productList.map(({ title }, key) => (
          <div
            key={key}
            style={{
              border: "1px solid black",
              borderRadius: "4px",
              padding: "20px",
            }}
          >
            {title}
          </div>
        ))}
      </InfiniteScroll>

      <div onClick={getData} disabled={loading}>
        {loading ? "Loading..." : "GET"}
      </div>
    </div>
  );
};

export default PaginationList;
