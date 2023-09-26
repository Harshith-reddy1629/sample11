import OtpInput from "react-otp-input";

const OTP = ({ otpInput }) => {
  <OtpInput
    placeholder="OTP "
    value={otpInput}
    onChange={this.onOtpHandler}
    numInputs={4}
    renderSeparator={<span> &nbsp; </span>}
    renderInput={(props) => <input style={{ padding: "10px" }} {...props} />}
  />;
};

export default OTP;
