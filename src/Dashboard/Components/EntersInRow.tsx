import React from "react";
import "./EntersInRow.css";



const EntersInRow: React.FC<{}> = () => {
    // const [entersInRow, setEntersInRow] = React.useState<number>(0);
    // const location = useLocation();

    // React.useEffect(() => {
    //     const fetchEntersInRow = async () => {
    //         try {
    //             const response = await fetch(
    //                 `${apiConfig.getEntriesInRowUrl()}/${iduser}`,
    //                 {
    //                     method: "GET",
    //                     credentials: "include",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                 }
    //             );

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error: ${response.status}`);
    //             }

    //             const data: EntersInRowResponse = await response.json();
    //             setEntersInRow(data.EntersInRow);
    //         } catch (error) {
    //             console.error("Błąd pobierania EntersInRow:", error);
    //         }
    //     };

    //     if (iduser) {
    //         fetchEntersInRow();
    //     }
    // }, [iduser, location]);

    return (
        <div className="row-enters">
            <h3>Dzisiejsze Zaczęcie pracy o: Brak</h3>
        </div>
    );
};

export default EntersInRow;
