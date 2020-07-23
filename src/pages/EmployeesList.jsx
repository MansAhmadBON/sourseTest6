import React from "react";
import {Header, ListItem, Footer} from '../components'

const EmployeesList = ({listData}) => (
    <div>
        <Header/>
        <main>
            <h1>
                Список сотрудников
            </h1>
            <ul className="list list--EmployeesList">
                {
                    listData.map(worker => {
                        return (
                            <ListItem
                                itemText={`${worker.first_name } ${worker.last_name}`}
                                id={worker.id}
                                key={worker.id}
                            />
                        )
                    })
                }
            </ul>
        </main>
        <Footer />
    </div>
);


export default EmployeesList;