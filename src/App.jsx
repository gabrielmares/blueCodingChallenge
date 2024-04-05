import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { fetchSearch } from "./fetch";
import ThumbnailsComponent from "./components/ThumbnailsComponent";
import Modal from "react-modal";

function App() {
    const [params, setParams] = useState("");
    const [listFetched, setListFetched] = useState([]);
    const [modal, setModal] = useState(false);
    const [display, setDisplay] = useState({});

    const displayModal = (obj) => {
        setDisplay(obj);
        setModal(true);
    };

    useEffect(() => {
        if (params.length < 3) return;
        fetchSearch(params).then((res) => setListFetched(res.data));
    }, [params]);

    console.log(display);

    return (
        <div>
            <input name="params" onChange={(e) => setParams(e.target.value)} />
            <div className="rowStyles">
                {listFetched.length > 0
                    ? listFetched.map((element) => (
                          <ThumbnailsComponent
                              obj={element}
                              setView={displayModal}
                              key={element.id}
                          />
                      ))
                    : undefined}
            </div>
            <Modal isOpen={modal} onRequestClose={() => setModal(false)}>
                <div style={{ display: "flex", alignItems: "center", flexDirection:"row", justifyContent:"center" }}>
                    <img
                        loading="lazy"
                        src={display?.images?.original.url}
                        key={display?.images?.original}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default App;

/*

https://giphy.com/gifs/bbwasiaaustralia-hari-raya-selamat-AwjGknE1p9nKDyVVQW

 */
