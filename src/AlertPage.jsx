import "./TodoistContext.css";

import React, { useContext } from "react";

import AlertContext from "./helper/Context/Alert-context/AlertContext";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import "./alert.css";

const AlertPage = () => {
	const { alert } = useContext(AlertContext);

	// added classes for styling, classes are conditionally applied using tenary op

	return (
		alert !== null && (
			<div
				className={`alert ${alert.alertType === "error" &&
					`error-alert`} ${alert.alertType === "success" && `success-alert`}`}
			>
				{alert.alertType === "error" && (
					<BsFillExclamationTriangleFill
						style={{ color: "#fff", marginRight: "4px" }}
					/>
				)}
				<p className=''>{alert.msg}</p>
			</div>
		)
	);
};

export default AlertPage;
