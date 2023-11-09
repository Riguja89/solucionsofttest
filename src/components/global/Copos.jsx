import React, {  } from "react";

const Copos = ({children,clase} ) => {
  return (
    <div className={clase} >
      <div className={clase}>
        <div className={clase}>
          <div className={clase}>
           {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copos;
