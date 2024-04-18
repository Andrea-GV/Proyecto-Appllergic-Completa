import React from "react";

function MyComponent() {
  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleScan = (data) => {
    console.log("Scan result:", data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QRScanner
        onDecode={handleScan}
        onError={handleError}
        style={previewStyle}
      />
    </div>
  );
}

export default MyComponent;
