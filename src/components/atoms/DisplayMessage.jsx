export const DisplayMessage = (props) => (
    <div className={"message " + props.messageType}>{props.message}</div>
);

export default DisplayMessage;
