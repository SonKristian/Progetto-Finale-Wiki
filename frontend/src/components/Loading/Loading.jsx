const Loading = ({ loading }) => {
  return (
    <div>
      {loading && <img src="http://localhost:5173/src/assets/spider.gif" alt="Loading" />}
      {/* Altri componenti della tua pagina */}
    </div>
  );
};

export default Loading;
