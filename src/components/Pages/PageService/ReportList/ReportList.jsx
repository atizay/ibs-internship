import React, {useRef} from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ReactToPrint from "react-to-print"
import {CSVLink} from 'react-csv'
import {useTypedSelector} from '../../../../hooks/useTypedSelector'
import s from './ReportList.module.scss'

const ReportList = React.forwardRef((props, ref) => {

    const { items } = useTypedSelector(state => state)
    const { vacanciesRegion, vacanciesCities, summaryRegion, summaryCities } = items

    return (
      <div className={s.reportList} ref={ref}>
        {
          !!vacanciesRegion || !!vacanciesCities ? (
            <div className={s.reportItem}>
              {!!vacanciesRegion.length > 0 ?
                <div className={s.graphWrapper}>
                  <h3 className={s.graphLabel}>График зарплатных предложений</h3>
                  <ResponsiveContainer width={500} height={400}>
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
                      <Bar dataKey="bottomSalary" fill="#4791db"  name={'Верхняя граница'}/>
                      <Bar dataKey="middleSalary" fill="#1976d2"  name={'Медианное значение'}/>
                      <Bar dataKey="topSalary" fill="#115293"  name={'Нижняя граница'}/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              :
              <p>Данные для построения грфика отсутствуют</p>
              }
              { !!vacanciesCities.length > 0 ? (
                <CSVLink
                  data={vacanciesCities}
                  filename={"Отчет вакансий.csv"}
                  className={`${s.btn} ${s.btn_primary} ${s.btn_download}`}
                >
                  Подробный отчет
                </CSVLink>)
              :
                <p>Данные для подробного отчета отсутствуют</p>
              }
            </div>
          ) : <p>Пожалуйста, подождите, идет загрузка.</p>
        }

        {
          !!summaryRegion && !!summaryCities ? (
            <div className={s.reportItem}>
              {!!vacanciesRegion.length > 0 ?
                  <div className={s.graphWrapper}>
                    <h3 className={s.graphLabel}>График зарплатных ожиданий</h3>
                    <ResponsiveContainer width={500} height={400}>
                      <BarChart
                        barSize={40}
                        barGap={40}
                        width={summaryRegion.length * 400}
                        height={300}
                        data={summaryRegion}
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
                        <Bar dataKey="bottomSalary" fill="#4791db"  name={'Верхняя граница'}/>
                        <Bar dataKey="middleSalary" fill="#1976d2"  name={'Медианное значение'}/>
                        <Bar dataKey="topSalary" fill="#115293"  name={'Нижняя граница'}/>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                :
                <p>Данные для построения грфика отсутствуют</p>
              }
              { !!vacanciesCities.length > 0 ? (
                  <CSVLink
                    data={summaryCities}
                    filename={"Отчет ожиданий.csv"}
                    className={`${s.btn} ${s.btn_primary} ${s.btn_download}`}
                  >
                    Подробный отчет
                  </CSVLink>
                ) : <p>Данные для подробного отчета отсутствуют</p>
              }
            </div>
          ) : (<p>Пожалуйста, подождите, идет загрузка.</p>)
        }
      </div>
    )
  }
)

const ReportTemplate = () => {

  const { items } = useTypedSelector(state => state)
  const { vacanciesRegion, vacanciesCities } = items

  const componentRef = useRef();
  return (
    !!vacanciesRegion && !!vacanciesCities ? (
      <div>
        <ReactToPrint
          trigger={() => <button href={'#'} className={`${s.btn} ${s.btn_primary}`}>Скачать отчет</button>}
          content={() => componentRef.current}
        />
        <ReportList ref={componentRef} />
      </div>
    ) : (<h3>Выберите параметры запроса</h3>)
  )
}

export {ReportTemplate}