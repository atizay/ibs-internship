import React from "react";
import s from "./Content.module.scss"
import {Route} from "react-router-dom";
import {PageAbout} from "../Pages/PageAbout/PageAbout";
import {PageService} from "../Pages/PageService/PageService";


export const Content = () => {

  return (
    <main>
      <section className={s.content}>
        <Route path='/' exact render={() => <PageAbout />  } />
        <Route path='/service' render={() => <PageService />  } />
      </section>
    </main>
  )
}