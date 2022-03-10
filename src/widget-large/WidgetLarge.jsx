import React from "react";
import "./WidgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={`widgetLargeButton ${type}`}>{type}</button>;
  };

  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="" alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Ehi Unah </span>
          </td>
          <td className="widgetLargeDate">2, Feb 2022</td>
          <td className="widgetLargeAmount">$222.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="" alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Ehi Unah </span>
          </td>
          <td className="widgetLargeDate">2, Feb 2022</td>
          <td className="widgetLargeAmount">$222.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="" alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Ehi Unah </span>
          </td>
          <td className="widgetLargeDate">2, Feb 2022</td>
          <td className="widgetLargeAmount">$222.00</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="" alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Ehi Unah </span>
          </td>
          <td className="widgetLargeDate">2, Feb 2022</td>
          <td className="widgetLargeAmount">$222.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
