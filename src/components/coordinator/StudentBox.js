import React, {useState} from "react";
import classes from "./ErrorMessageBox.module.css";
import Modal from "./Modal";


const StudentBox = ({ Name, Text, readStatus, data, Approved, offerOrNot }) => {

    const [isOffer, setIsOffer] = useState(offerOrNot)
    const [name, setName] = useState(Name)
    const [text, setText] = useState(Text)
    const [read, setRead] = useState(readStatus)
    const [approved, setApproved] = useState(Approved)

    const [dataOffer, setDataOffer] = useState(data)


    const [largeBoxVisible, setLargeBoxVisible] = useState(false)
    const [contWithSgkModalVisible, setContWithSgkModalVisible] = useState(false)
    const [contWithoutSgkModalVisible, setContWithoutSgkModalVisible] = useState(false)

    const openWithSgkModal = () => {
        if (isOffer) {
            // Approve and redirect logic
        }else{
            setContWithSgkModalVisible(true);
        }

    };
    const closeWithSgkModal = () => {
        setContWithSgkModalVisible(false);
    };
    const handleContinueWithSgk = (option) => {
        console.log(`Continued with ${option}`);
        setContWithSgkModalVisible(false);
    };

    const openWithoutSgkModal = () => {
        if(isOffer){
            setLargeBoxVisible(false);
        }else{
            setContWithoutSgkModalVisible(true);
        }

    };
    const closeWithoutSgkModal = () => {
        setContWithoutSgkModalVisible(false);
    };
    const handleContinueWithoutSgk = (option) => {
        console.log(`Continued with ${option}`);
        setContWithoutSgkModalVisible(false);
    };

    return (
        <div style={{marginBottom:8}}>
            <Modal style={{overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(171, 171, 171, 0.8)'
                },}} isOpen={contWithSgkModalVisible} onClose={closeWithSgkModal} onContinue={handleContinueWithSgk} text="You are about to continue with SGK." header="Do you want to continue?"/>
            <Modal style={{overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(171, 171, 171, 0.8)'
                },}} isOpen={contWithoutSgkModalVisible} onClose={closeWithoutSgkModal} onContinue={handleContinueWithoutSgk} text="You are about to continue without SGK." header="Do you want to continue?"/>

        {largeBoxVisible === true ?
            <div style={{
                height: 250,
                width: "80%",
                backgroundColor: "#ffffff",
                padding: 5,
                borderRadius: 30,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                marginLeft: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }} onClick={()=>setLargeBoxVisible(false)} >
                <div>
                    <p style={{ marginLeft: 20, fontSize: 25, fontWeight: "bold" }}>{name}</p>
                    <p style={{ marginTop: 0, marginLeft: 20, fontSize: 20 }}>{text}</p>
                </div>
                <div style={{
                    marginBottom: 10,
                    display: "flex",
                    gap: 15,
                    justifyContent: "flex-end",
                    marginRight: 20
                }}>
                    <div style={{
                        backgroundColor: "red",
                        borderRadius: 30,
                        width: "25%",
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} onClick={openWithoutSgkModal}>
                        {isOffer ? <p style={{color:"white", fontWeight:"bold"}}>Cancel</p> : <p style={{color:"white", fontWeight:"bold"}}>Continue without SGK</p> }
                    </div>
                    <div style={{
                        backgroundColor: "green",
                        borderRadius: 30,
                        width:  "40%",
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} onClick={openWithSgkModal}>
                        {isOffer ? <p style={{color:"white", fontWeight:"bold"}}>Approve and Redirect</p> : <p style={{color:"white", fontWeight:"bold"}}>Continue without SGK</p> }
                    </div>
                </div>
            </div>

            :
            <div className={classes.errorContainer} style={{height:30, width:"65%"}} onClick={() => setLargeBoxVisible(true)} >
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p style={{margin:0}} className={classes.errorTitle}>{Name}</p>
                    <p style={{margin:0}}>{read}</p>
                    <p style={{margin:0,marginRight:20}}>{approved}</p>

                </div>

            </div>
        }
        </div>
    );
}

export default StudentBox;