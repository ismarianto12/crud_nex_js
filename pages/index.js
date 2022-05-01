import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Router from 'next/router';
import Templates from '../compnents/templates';
import 'font-awesome/css/font-awesome.min.css'; //import in react app

export default function Home() {

  const [income, setIncome] = useState();
  const [loc, setLoc] = useState({
    username: ''
  });
  useEffect(() => {
    const kl = localStorage.getItem('sess_app');
    const loc = JSON.parse(kl);

    const parsing = (kl == null) ? '' : loc.username;
    setLoc({
      username: parsing
    });
    console.log(parsing);

  }, [])
  return (
    <Templates container={
      <>

        <div className="panel-header bg-primary-gradient">
          <div className="page-inner py-5">
            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
              <div>
                <h2 className="text-white pb-2 fw-bold">Dashboard</h2>
                <h5 className="text-white op-7 mb-2">
                  Free Bootstrap 4 Admin Dashboard
                </h5>
              </div>
              <div className="ml-md-auto py-2 py-md-0">
                <a href="#" className="btn btn-white btn-border btn-round mr-2">
                  Manage
                </a>
                <a href="#" className="btn btn-secondary btn-round">
                  Add Customer
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="page-inner mt--5">
          <div className="row mt--2">
            <div className="col-md-6">
              <div className="card full-height">
                <div className="card-body">
                  <div className="card-title">Overall statistics</div>
                  <div className="card-category">
                    Daily information about statistics income
                  </div>
                  <div className="d-flex flex-wrap justify-content-around pb-2 pt-4">
                    <div className="px-2 pb-2 pb-md-0 text-center">
                      <div id="circles-1" />
                      <h6 className="fw-bold mt-3 mb-0">New Users</h6>
                    </div>
                    <div className="px-2 pb-2 pb-md-0 text-center">
                      <div id="circles-2" />
                      <h6 className="fw-bold mt-3 mb-0">Sales</h6>
                    </div>
                    <div className="px-2 pb-2 pb-md-0 text-center">
                      <div id="circles-3" />
                      <h6 className="fw-bold mt-3 mb-0">Subscribers</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card full-height">
                <div className="card-body">
                  <div className="card-title">
                    Total income &amp; spend statistics
                  </div>
                  <div className="row py-3">
                    <div className="col-md-4 d-flex flex-column justify-content-around">
                      <div>
                        <h6 className="fw-bold text-uppercase text-success op-8">
                          Total Income
                        </h6>
                        <h3 className="fw-bold">$9.782</h3>
                      </div>
                      <div>
                        <h6 className="fw-bold text-uppercase text-danger op-8">
                          Total Spend
                        </h6>
                        <h3 className="fw-bold">$1,248</h3>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div id="chart-container">
                        <canvas id="totalIncomeChart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <div className="card-head-row">
                    <div className="card-title">User Statistics</div>
                    <div className="card-tools">
                      <a
                        href="#"
                        className="btn btn-info btn-border btn-round btn-sm mr-2"
                      >
                        <span className="btn-label">
                          <i className="fa fa-pencil" />
                        </span>
                        Export
                      </a>
                      <a
                        href="#"
                        className="btn btn-info btn-border btn-round btn-sm"
                      >
                        <span className="btn-label">
                          <i className="fa fa-print" />
                        </span>
                        Print
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart-container" style={{ minHeight: 375 }}>
                    <canvas id="statisticsChart" />
                  </div>
                  <div id="myChartLegend" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-primary">
                <div className="card-header">
                  <div className="card-title">Daily Sales</div>
                  <div className="card-category">March 25 - April 02</div>
                </div>
                <div className="card-body pb-0">
                  <div className="mb-4 mt-2">
                    <h1>$4,578.58</h1>
                  </div>
                  <div className="pull-in">
                    <canvas id="dailySalesChart" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pb-0">
                  <div className="h1 fw-bold float-right text-warning">Income</div>
                  <h2 className="mb-2">{income}</h2>
                  <p className="text-muted">Transactions</p>
                  <div className="pull-in sparkline-fix">
                    <div id="lineChart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-card-no-pd">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-head-row card-tools-still-right">
                    <h4 className="card-title">Users Geolocation</h4>
                    <div className="card-tools">
                      <button className="btn btn-icon btn-link btn-primary btn-xs">
                        <span className="fa fa-angle-down" />
                      </button>
                      <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                        <span className="fa fa-sync-alt" />
                      </button>
                      <button className="btn btn-icon btn-link btn-primary btn-xs">
                        <span className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                  <p className="card-category">
                    Map of the distribution of users around the world
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </>


    } />
  )
}

