const Loading = ({ loading, url }) => {
  return (
    <div className="flex items-center justify-center">
      {loading && (
        <img src={url} alt="Loading" />
      )}
    </div>
  );
};

export default Loading;
