import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {CSVLink} from "react-csv";
import s from "../ReportList.module.scss";


const ReportItem = ({vacanciesRegion, vacanciesCities}) => {
  return (
    <div className="graph graph-wrapper">
      <h3>График вакансий</h3>
      {
        !!vacanciesRegion && !!vacanciesCities ? (
          !!vacanciesRegion.length > 0 ?
            <>
              <ResponsiveContainer width={400} height={400}>
                <BarChart
                  barSize={40}
                  barGap={40}
                  width={vacanciesRegion.length * 100}
                  height={300}
                  data={vacanciesRegion}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend/>
                  <Bar dataKey="bottomSalary" fill="#4791db"  name={'Верхняя вилка'}/>
                  <Bar dataKey="middleSalary" fill="#1976d2"  name={'Медианная вилка'}/>
                  <Bar dataKey="topSalary" fill="#115293"  name={'Нижняя вилка'}/>
                </BarChart>
              </ResponsiveContainer>
              <CSVLink
                data={vacanciesCities}
                filename={"Отчет вакансий.csv"}
                className={`${s.btn} ${s.btn_primary}`}
              >
                Скачать подробный отчет по вакансиям
              </CSVLink>
            </>
            :
            <p>По вашему запросу данных нет</p>
        ) : (
          <p>Пожалуйста, подождите, идет загрузка.</p>
        )
      }
    </div>
  )
}

export {ReportItem}