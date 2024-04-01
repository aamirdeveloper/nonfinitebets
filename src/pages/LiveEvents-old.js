import React, { useEffect, useState } from 'react'
import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import BottomMenu from '../components/BottomMenu'

import { FaChartLine, FaRegFutbol, FaTableTennis, FaYoutube } from 'react-icons/fa'
import { FaBaseball, FaBasketball } from 'react-icons/fa6';
import { TbAirBalloon } from 'react-icons/tb';
import DatePicker from 'react-date-picker';
import $ from 'jquery';
import axios from 'axios'


const LiveEvents = () => {

    const [dateValue, onChange] = useState(new Date());

    useEffect(() => {
        // var d = $('#gameDate').val();
        var date = dateValue;

        // Extract year, month, and day from the Date object
        var year = date.getFullYear();
        // getMonth() returns 0-based index, so we add 1 to get the correct month
        var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Pad with leading zero if needed
        var day = date.getDate().toString().padStart(2, '0'); // Pad with leading zero if needed

        // Format the date as YYYY-MM-DD
        var formattedDate = year + "-" + month + "-" + day;
        // loadFunc(formattedDate, "All");
        loadFun2(formattedDate, "All");
    }, [])


    function submitform() {
        // var d = $('#gameDate').val();
        var date = dateValue;

        $('.soccerData').html("");

        // Extract year, month, and day from the Date object
        var year = date.getFullYear();
        // getMonth() returns 0-based index, so we add 1 to get the correct month
        var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Pad with leading zero if needed
        var day = date.getDate().toString().padStart(2, '0'); // Pad with leading zero if needed

        // Format the date as YYYY-MM-DD
        var formattedDate = year + "-" + month + "-" + day;
        loadFunc(formattedDate, "All");
    }

    function getDistinctValuesByKey(obj, key) {
        const values = [];
        Object.values(obj).forEach(event => {
            if (event.hasOwnProperty(key) && !values.includes(event[key])) {
                values.push(event[key]);
            }
        });
        return values;
    }



    function loadFunc(formattedDate, type) {
        // var d = $('#gameDate').val();
        var date = dateValue;

        if (type == 'All') {
            $('.liveTab1 .nav-link').removeClass('active')
            $('.liveTab1 .nav-link.All').addClass('active')
        } else if (type == 'Live') {
            $('.liveTab1 .nav-link').removeClass('active')
            $('.liveTab1 .nav-link.Live').addClass('active')
        } else if (type == 'Finished') {
            $('.liveTab1 .nav-link').removeClass('active')
            $('.liveTab1 .nav-link.Finished').addClass('active')
        }

        $('.soccerData').html("");

        // Extract year, month, and day from the Date object
        var year = date.getFullYear();
        // getMonth() returns 0-based index, so we add 1 to get the correct month
        var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Pad with leading zero if needed
        var day = date.getDate().toString().padStart(2, '0'); // Pad with leading zero if needed

        // Format the date as YYYY-MM-DD
        var formattedDate = year + "-" + month + "-" + day;


        $('.soccerData').html('');
        $.ajax
            ({
                type: "GET",
                url: "https://eapi.enetpulse.com/event/daily/?username=nbetsapiusr&token=4d695ad0f5f645df21e34b78ae96cfb1&sportFK=1&language_typeFK=3&date=" + formattedDate,
                success: function (html) {

                    const obj = html;
                    // console.log(html);
                    var i = 1;
                    var accordianData = "";
                    var ht = obj.events;

                    // Get distinct tournament stage names
                    const distinctTournamentStages = getDistinctValuesByKey(ht, 'tournament_stage_name');

                    // Output the distinct tournament stage names
                    // console.log(distinctTournamentStages);

                    distinctTournamentStages.forEach(function (item) {
                        var accordian = 'panelsStayOpen-collapse-' + i;
                        // console.log(item);
                        accordianData += '<div class="accordion-item" style="margin-bottom:15px;"><h2 class="accordion-header" id="panelsStayOpen-heading-1"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#' + accordian + '" aria-expanded="false" aria-controls="' + accordian + '"> ' + item + '</button></h2><div id="' + accordian + '" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-1"><div class="accordion-body">';

                        $.each(obj.events, function (key, val) {

                            if (type == "All")
                                type = "Finished";

                            if (item == val.tournament_stage_name && val.status_type == type) {

                                accordianData += '<div class="game-div mt-4"><hr class="my-0"><div class="row gx-3 gy-2 position-relative"><div class="col-md-4 col-12"><div class="d-flex"><div class="w-100"><p class="head mb-2 mb-md-3">';

                                if (val.status_type == "Not started")
                                    accordianData += '<span class="badge live">Not Started</span>';
                                else if (val.status_type == "Finished")
                                    accordianData += '<span class="badge live">Finished</span>';
                                else if (val.status_type == "Live")
                                    accordianData += '<span class="badge live">Live</span>';

                                accordianData += ' <span class="ms-2 small text-white-75 fw-light"> </span> <span class="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p></div>';
                                accordianData += '<div class="d-block d-md-none"><p class="mb-0 text-nowrap">+ 42</p></div></div><div class="d-flex d-md-block">';

                                var j = 0;
                                var participantNew = "";
                                // console.log(val.event_participants);
                                $.each(val.event_participants, function (key1, val1) {
                                    if (j == 1) {
                                        participantNew += val1.participant.name;
                                        accordianData += '<p class="mb-1 fw-500">' + val1.participant.name + '</p>';
                                    }
                                    else {
                                        participantNew += " -" + val1.participant.name;
                                        accordianData += '<p class="mb-0 mx-2 d-block d-md-none">-</p><p class="mb-1 fw-500">' + val1.participant.name + '</p>';
                                    }
                                });

                                accordianData += '</div></div><div class="col-md-8 col-12"><div class="text-center"><p class="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p><p class="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p></div><div class="align-items-center d-flex flex-sm-nowrap flex-wrap game-right"><div class="gr-box gr-num d-none d-md-block"><p class="mb-1 text-blue">1</p> <p class="mb-0 text-blue">2</p></div> <div class="gr-box gr-icon d-none d-md-block"> <p class="mb-1 text-white-50"><i class="fa-solid fa-chart-line"></i></p> <p class="mb-0 text-white-50"><i class="fa-brands fa-youtube"></i></p> </div>';


                                j = 1;
                                $.each(val.event_participants, function (key2, val2) {
                                    if (j == 1) {
                                        accordianData += ' <div class="gr-box gr-fc one"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">' + val2.participant.name + '</p>';
                                        //if(val.status_type == "Not started")
                                        accordianData += ' <p class="mb-0 text-blue">-</p>';
                                        accordianData += ' </div> </div>';
                                        accordianData += ' <div class="gr-box gr-fc d-none d-sm-block"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">draw</p> <p class="mb-0 text-blue">17.0</p> </div> </div>';
                                    }
                                    else {
                                        accordianData += '<div class="gr-box gr-fc"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">' + val2.participant.name + '</p>';
                                        //if(val.status_type == "Not started")
                                        accordianData += ' <p class="mb-0 text-blue">-</p>';
                                        accordianData += '</div> </div></div></div></div></div>';
                                    }
                                    j++;
                                });
                                j = 1;
                            }
                        });
                        accordianData += '</div> </div> </div>';
                        if (accordianData == "")
                            $('.soccerData').html("No Records");
                        i++;
                        $('.soccerData').append(accordianData);
                        accordianData = "";
                    });


                }
            });
    }

    async function loadFun2(formattedDate, type) {


        // var d = $('#gameDate').val();
        var date = dateValue;

        if (type == 'All') {
            $('.liveTab1 .nav-link').removeClass('active')
            $('.liveTab1 .nav-link.All').addClass('active')
        } else if (type == 'Live') {
            $('.liveTab1 .nav-link').removeClass('active')
            $('.liveTab1 .nav-link.Live').addClass('active')
        } else if (type == 'Finished') {
            $('.liveTab1 .nav-link').removeClass('active')
            $('.liveTab1 .nav-link.Finished').addClass('active')
        }

        $('.soccerData').html("");

        // Extract year, month, and day from the Date object
        var year = date.getFullYear();
        // getMonth() returns 0-based index, so we add 1 to get the correct month
        var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Pad with leading zero if needed
        var day = date.getDate().toString().padStart(2, '0'); // Pad with leading zero if needed

        // Format the date as YYYY-MM-DD
        var formattedDate = year + "-" + month + "-" + day;

        try {
            const response = await axios.get(`https://dev-zilla.com/projects/nonfinite_bets_after/games.json`)
            if (response.data.games.length > 0) {
                let accordianDataFirst = "";
                let accordianDatasecond = "";
                let accordionItemHtml1 = "";
                let accordionItemHtml2 = "";
                let close = "";
                response.data.games.forEach(myFunction);
                $('.soccerData').html(accordionItemHtml1 + accordianDataFirst + close + accordionItemHtml2 + accordianDatasecond + close);

                function myFunction(item, index) {
                    // console.log(item.league);

                    if (item.league == 'Premier League') {
                        if (accordianDataFirst == "") {
                            accordionItemHtml1 += `<div class="accordion-item" style="margin-bottom:15px;"><h2 class="accordion-header" id="panelsStayOpen-heading-${item.id}"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${item.id}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${item.id}" fdprocessedid="553hre"> ${item.league}</button></h2><div id="panelsStayOpen-collapse-${item.id}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-${item.id}"><div class="accordion-body">`;
                        }
                        accordianDataFirst += `<div class="game-div mt-4"><hr class="my-0"><div class="row gx-3 gy-2 position-relative"><div class="col-md-4 col-12"><div class="d-flex"><div class="w-100"><p class="head mb-2 mb-md-3"><span class="badge live">Finished</span> <span class="ms-2 small text-white-75 fw-light"> </span> <span class="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p></div><div class="d-block d-md-none"><p class="mb-0 text-nowrap">+ 42</p></div></div><div class="d-flex d-md-block"><p class="mb-0 mx-2 d-block d-md-none">-</p><p class="mb-1 fw-500">${item.team1}</p><p class="mb-0 mx-2 d-block d-md-none">-</p><p class="mb-1 fw-500">${item.team2}</p></div></div><div class="col-md-8 col-12"><div class="text-center"><p class="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p><p class="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p></div><div class="align-items-center d-flex flex-sm-nowrap flex-wrap game-right"><div class="gr-box gr-num d-none d-md-block"><p class="mb-1 text-blue">1</p> <p class="mb-0 text-blue">2</p></div> <div class="gr-box gr-icon d-none d-md-block"> <p class="mb-1 text-white-50"><i class="fa-solid fa-chart-line"></i></p> <p class="mb-0 text-white-50"><i class="fa-brands fa-youtube"></i></p> </div> <div class="gr-box gr-fc one"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">${item.team1}</p> <p class="mb-0 text-blue">-</p> </div> </div> <div class="gr-box gr-fc d-none d-sm-block"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">draw</p> <p class="mb-0 text-blue">17.0</p> </div> </div><div class="gr-box gr-fc"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">${item.team2}</p> <p class="mb-0 text-blue">-</p></div> </div></div></div></div></div>`;
                    }
                    else {
                        if (accordianDatasecond == "") {
                            accordionItemHtml2 += `<div class="accordion-item" style="margin-bottom:15px;"><h2 class="accordion-header" id="panelsStayOpen-heading-${item.id}"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${item.id}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${item.id}" fdprocessedid="553hre"> ${item.league}</button></h2><div id="panelsStayOpen-collapse-${item.id}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-${item.id}"><div class="accordion-body">`;
                        }
                        accordianDatasecond += `<div class="game-div mt-4"><hr class="my-0"><div class="row gx-3 gy-2 position-relative"><div class="col-md-4 col-12"><div class="d-flex"><div class="w-100"><p class="head mb-2 mb-md-3"><span class="badge live">Finished</span> <span class="ms-2 small text-white-75 fw-light"> </span> <span class="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p></div><div class="d-block d-md-none"><p class="mb-0 text-nowrap">+ 42</p></div></div><div class="d-flex d-md-block"><p class="mb-0 mx-2 d-block d-md-none">-</p><p class="mb-1 fw-500">${item.team1}</p><p class="mb-0 mx-2 d-block d-md-none">-</p><p class="mb-1 fw-500">${item.team2}</p></div></div><div class="col-md-8 col-12"><div class="text-center"><p class="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p><p class="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p></div><div class="align-items-center d-flex flex-sm-nowrap flex-wrap game-right"><div class="gr-box gr-num d-none d-md-block"><p class="mb-1 text-blue">1</p> <p class="mb-0 text-blue">2</p></div> <div class="gr-box gr-icon d-none d-md-block"> <p class="mb-1 text-white-50"><i class="fa-solid fa-chart-line"></i></p> <p class="mb-0 text-white-50"><i class="fa-brands fa-youtube"></i></p> </div> <div class="gr-box gr-fc one"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">${item.team1}</p> <p class="mb-0 text-blue">-</p> </div> </div> <div class="gr-box gr-fc d-none d-sm-block"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">draw</p> <p class="mb-0 text-blue">17.0</p> </div> </div><div class="gr-box gr-fc"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">${item.team2}</p> <p class="mb-0 text-blue">-</p></div> </div></div></div></div></div>`;

                    }
                    // console.log(accordianDataFirst);
                    // accordianDataFirst += `<div class="accordion-item" style="margin-bottom:15px;"><h2 class="accordion-header" id="panelsStayOpen-heading-${item.id}"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${item.id}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${item.id}" fdprocessedid="553hre"> ${item.league}</button></h2><div id="panelsStayOpen-collapse-${item.id}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-${item.id}"><div class="accordion-body">
                    //     <div class="game-div mt-4"><hr class="my-0"><div class="row gx-3 gy-2 position-relative"><div class="col-md-4 col-12"><div class="d-flex"><div class="w-100"><p class="head mb-2 mb-md-3"><span class="badge live">Finished</span> <span class="ms-2 small text-white-75 fw-light"> </span> <span class="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p></div><div class="d-block d-md-none"><p class="mb-0 text-nowrap">+ 42</p></div></div><div class="d-flex d-md-block"><p class="mb-0 mx-2 d-block d-md-none">-</p><p class="mb-1 fw-500">${item.team1}</p><p class="mb-0 mx-2 d-block d-md-none">-</p><p class="mb-1 fw-500">${item.team2}</p></div></div><div class="col-md-8 col-12"><div class="text-center"><p class="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p><p class="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p></div><div class="align-items-center d-flex flex-sm-nowrap flex-wrap game-right"><div class="gr-box gr-num d-none d-md-block"><p class="mb-1 text-blue">1</p> <p class="mb-0 text-blue">2</p></div> <div class="gr-box gr-icon d-none d-md-block"> <p class="mb-1 text-white-50"><i class="fa-solid fa-chart-line"></i></p> <p class="mb-0 text-white-50"><i class="fa-brands fa-youtube"></i></p> </div> <div class="gr-box gr-fc one"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">Cadiz</p> <p class="mb-0 text-blue">-</p> </div> </div> <div class="gr-box gr-fc d-none d-sm-block"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">draw</p> <p class="mb-0 text-blue">17.0</p> </div> </div><div class="gr-box gr-fc"> <div class="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight"> <p class="mb-0 fw-500 ellipsis-1">Real Betis</p> <p class="mb-0 text-blue">-</p></div> </div></div></div></div></div>
                    //     </div> </div> </div>`; 

                    close += `</div></div></div>`;
                }
            }
        } catch (error) {
            console.log("Error:", error);
        }

    }

    return (
        <>
            <Headers />
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">

                    <Sidebar />

                    <div className="main-panel">
                        <div className="content-wrapper pt-0">
                            <div className="match-marquee">
                                <marquee behavior="scroll" direction="left" scrollamount={10}>
                                    <span className="me-3 text-white"><img src="assets/images/central1.png" alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central2.png" alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central1.png" alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central2.png" alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central1.png" alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central2.png" alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central1.png" alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central2.png" alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central1.png" alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central2.png" alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central1.png" alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central2.png" alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central1.png" alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="me-3 text-white"><img src="assets/images/central2.png" alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                </marquee>
                            </div>
                            <div className="padding pt-0">
                                <div className="page-header">
                                    <h4 className="mb-0">
                                        <span>Live Events</span> <i className="align-middle fa-circle fa-solid ms-1" style={{ fontSize: '7px', color: '#e90f3d' }} />
                                    </h4>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <nav className="tab-01 scrollbar mb-3">
                                            <div className="nav nav-tabs flex-nowrap mb-1" id="nav-tab" role="tablist">
                                                <button className="nav-link active" id="nav-tab-1" data-bs-toggle="tab" data-bs-target="#nav-game-1" type="button" role="tab" aria-controls="nav-game-1" aria-selected="true">
                                                    <FaRegFutbol /> <span className="txt">Soccer</span> <span className="num ms-1">7</span>
                                                </button>
                                                <button className="nav-link" id="nav-tab-2" data-bs-toggle="tab" data-bs-target="#nav-game-2" type="button" role="tab" aria-controls="nav-game-2" aria-selected="false">
                                                    <FaTableTennis /> <span className="txt">Tennis</span> <span className="num ms-1">12</span>
                                                </button>
                                                <button className="nav-link" id="nav-tab-3" data-bs-toggle="tab" data-bs-target="#nav-game-3" type="button" role="tab" aria-controls="nav-game-3" aria-selected="false">
                                                    <FaBaseball /> <span className="txt">Cricket</span> <span className="num ms-1">4</span>
                                                </button>
                                                <button className="nav-link" id="nav-tab-4" data-bs-toggle="tab" data-bs-target="#nav-game-4" type="button" role="tab" aria-controls="nav-game-4" aria-selected="false">
                                                    <FaBasketball /> <span className="txt">Basketball</span> <span className="num ms-1">9</span>
                                                </button>
                                                <button className="nav-link" id="nav-tab-5" data-bs-toggle="tab" data-bs-target="#nav-game-5" type="button" role="tab" aria-controls="nav-game-5" aria-selected="false">
                                                    <FaBaseball /> <span className="txt">Baseball</span> <span className="num ms-1">6</span>
                                                </button>
                                                <button className="nav-link" id="nav-tab-6" data-bs-toggle="tab" data-bs-target="#nav-game-6" type="button" role="tab" aria-controls="nav-game-6" aria-selected="false">
                                                    <TbAirBalloon /> <span className="txt">Badminton</span> <span className="num ms-1">8</span>
                                                </button>
                                            </div>
                                        </nav>
                                        <div className="row g-2 align-items-center">
                                            <div className="col-sm-6 col-12">
                                                <div className="scrollbar">
                                                    <nav className="tab-02 mb-1 live-tab liveTab1">
                                                        <div className="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                                                            <button className="nav-link All active" onClick={() => loadFunc("2024-02-12", "All")}>
                                                                All
                                                            </button>
                                                            <button className="nav-link Live" onClick={() => loadFunc("2024-02-12", "Live")}>
                                                                Live
                                                            </button>
                                                            <button className="nav-link Finished" onClick={() => loadFunc("2024-02-12", "Finished")}>
                                                                Finished
                                                            </button>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-12 text-end">
                                                {/* <div className="ui calendar mb-2" id="date1" onclose="window.location.reload();">
                                                    <div className="ui input left icon">
                                                        <i className="calendar icon" />
                                                        <input type="text" id="gameDate" placeholder="Date" />
                                                    </div>
                                                    <button onClick={submitform} style={{ backgroundColor: '#0167fe', border: 'none' }} className="btn btn-primary">Submit</button>
                                                </div> */}
                                                <div className="mb-2 d-flex justify-content-end" id="date1" onclose="window.location.reload();">
                                                    <div>
                                                        <DatePicker id="gameDate" onChange={onChange} value={dateValue} readOnly={true} />
                                                    </div>
                                                    <button onClick={submitform} className="btn btn1 py-3 ms-1">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-content border bg-transparent border-0" id="nav-tabContent">
                                            <div className="tab-pane fade active show" id="nav-game-1" role="tabpanel" aria-labelledby="nav-tab-1">
                                                <div className="accordion accordion-1 soccerData" id="accordionPanelsStayOpenExample">
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-2" role="tabpanel" aria-labelledby="nav-tab-2">
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="tennis-heading-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tennis-collapse-1" aria-expanded="true" aria-controls="tennis-collapse-1">
                                                                International/Friendlies, Women
                                                            </button>
                                                        </h2>
                                                        <div id="tennis-collapse-1" className="accordion-collapse collapse show" aria-labelledby="tennis-heading-1">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr className="d-block d-md-none" />
                                                                <div className="game-div mt-3 mt-md-4">
                                                                    <hr className="my-0" />
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">FC Pakhtakor Tashkent</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Fayha FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="tennis-heading-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tennis-collapse-2" aria-expanded="true" aria-controls="tennis-collapse-2">
                                                                England/FA Cup
                                                            </button>
                                                        </h2>
                                                        <div id="tennis-collapse-2" className="accordion-collapse collapse show" aria-labelledby="tennis-heading-2">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Alfreton Town</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">3.05</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Walsall FC</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-3" role="tabpanel" aria-labelledby="nav-tab-3">
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="cricket-heading-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cricket-collapse-1" aria-expanded="true" aria-controls="cricket-collapse-1">
                                                                International/Friendlies, Women
                                                            </button>
                                                        </h2>
                                                        <div id="cricket-collapse-1" className="accordion-collapse collapse show" aria-labelledby="cricket-heading-1">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr className="d-block d-md-none" />
                                                                <div className="game-div mt-3 mt-md-4">
                                                                    <hr className="my-0" />
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">FC Pakhtakor Tashkent</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Fayha FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="cricket-heading-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cricket-collapse-2" aria-expanded="true" aria-controls="cricket-collapse-2">
                                                                England/FA Cup
                                                            </button>
                                                        </h2>
                                                        <div id="cricket-collapse-2" className="accordion-collapse collapse show" aria-labelledby="cricket-heading-2">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Alfreton Town</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">3.05</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Walsall FC</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-4" role="tabpanel" aria-labelledby="nav-tab-4">
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="basketball-heading-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#basketball-collapse-1" aria-expanded="true" aria-controls="basketball-collapse-1">
                                                                International/Friendlies, Women
                                                            </button>
                                                        </h2>
                                                        <div id="basketball-collapse-1" className="accordion-collapse collapse show" aria-labelledby="basketball-heading-1">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr className="d-block d-md-none" />
                                                                <div className="game-div mt-3 mt-md-4">
                                                                    <hr className="my-0" />
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">FC Pakhtakor Tashkent</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Fayha FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="basketball-heading-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#basketball-collapse-2" aria-expanded="true" aria-controls="basketball-collapse-2">
                                                                England/FA Cup
                                                            </button>
                                                        </h2>
                                                        <div id="basketball-collapse-2" className="accordion-collapse collapse show" aria-labelledby="basketball-heading-2">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Alfreton Town</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">3.05</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Walsall FC</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-5" role="tabpanel" aria-labelledby="nav-tab-5">
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="baseball-heading-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#baseball-collapse-1" aria-expanded="true" aria-controls="baseball-collapse-1">
                                                                International/Friendlies, Women
                                                            </button>
                                                        </h2>
                                                        <div id="baseball-collapse-1" className="accordion-collapse collapse show" aria-labelledby="baseball-heading-1">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr className="d-block d-md-none" />
                                                                <div className="game-div mt-3 mt-md-4">
                                                                    <hr className="my-0" />
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">FC Pakhtakor Tashkent</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Fayha FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="baseball-heading-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#baseball-collapse-2" aria-expanded="true" aria-controls="baseball-collapse-2">
                                                                England/FA Cup
                                                            </button>
                                                        </h2>
                                                        <div id="baseball-collapse-2" className="accordion-collapse collapse show" aria-labelledby="baseball-heading-2">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Alfreton Town</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">3.05</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Walsall FC</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-6" role="tabpanel" aria-labelledby="nav-tab-6">
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="badminton-heading-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#badminton-collapse-1" aria-expanded="true" aria-controls="badminton-collapse-1">
                                                                International/Friendlies, Women
                                                            </button>
                                                        </h2>
                                                        <div id="badminton-collapse-1" className="accordion-collapse collapse show" aria-labelledby="badminton-heading-1">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr className="d-block d-md-none" />
                                                                <div className="game-div mt-3 mt-md-4">
                                                                    <hr className="my-0" />
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">FC Pakhtakor Tashkent</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Fayha FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Ahal FC</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">AL Ain Fc</p>
                                                                                        <p className="mb-0 text-blue">17.0</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="badminton-heading-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#badminton-collapse-2" aria-expanded="true" aria-controls="badminton-collapse-2">
                                                                England/FA Cup
                                                            </button>
                                                        </h2>
                                                        <div id="badminton-collapse-2" className="accordion-collapse collapse show" aria-labelledby="badminton-heading-2">
                                                            <div className="accordion-body">
                                                                <div className="game-div">
                                                                    <div className="row gx-3 gy-2 position-relative">
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="d-flex">
                                                                                <div className="w-100">
                                                                                    <p className="head mb-2 mb-md-3"><span className="badge live">Live</span> 37' <span className="ms-2 small text-white-75 fw-light">1st Half</span> <span className="ms-2 small text-white-75 fw-light d-inline-block d-md-none">1x2</span></p>
                                                                                </div>
                                                                                <div className="d-block d-md-none">
                                                                                    <p className="mb-0 text-nowrap">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex d-md-block">
                                                                                <p className="mb-1 fw-500">Ahal FC</p>
                                                                                <p className="mb-0 mx-2 d-block d-md-none">-</p>
                                                                                <p className="mb-0 fw-500">AL Ain FC</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 col-12">
                                                                            <div className="text-center">
                                                                                <p className="mb-3 small text-white-75 fw-light fs-12 txt1x2 d-none d-md-block">1x2</p>
                                                                                <p className="mb-2 small text-white-75 fw-light fs-12 d-block d-md-none">Winner (Incl. Overtime) </p>
                                                                            </div>
                                                                            <div className="align-items-center d-flex flex-sm-nowrap flex-wrap game-right">
                                                                                <div className="gr-box gr-num d-none d-md-block">
                                                                                    <p className="mb-1 text-blue">1</p>
                                                                                    <p className="mb-0 text-blue">2</p>
                                                                                </div>
                                                                                <div className="gr-box gr-icon d-none d-md-block">
                                                                                    <p className="mb-1 text-white-50"><i className="fa-solid fa-chart-line" /></p>
                                                                                    <p className="mb-0 text-white-50"><i className="fa-brands fa-youtube" /></p>
                                                                                </div>
                                                                                <div className="gr-box gr-fc one">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Alfreton Town</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc d-none d-sm-block">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">draw</p>
                                                                                        <p className="mb-0 text-blue">3.05</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-fc">
                                                                                    <div className="payment-box" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                                        <p className="mb-0 fw-500 ellipsis-1">Walsall FC</p>
                                                                                        <p className="mb-0 text-blue">3.50 <i className="fa-solid fa-caret-up text-green ms-1 align-middle" /></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="gr-box gr-numplus d-none d-md-block">
                                                                                    <p className="mb-0">+ 42</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas offcanvas-end offcanvas-01" tabIndex={-1} id="offcanvasRates" data-bs-scroll="true" data-bs-backdrop="false" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <h5 id="offcanvasRightLabel" className="mb-0">Rates <span className="badge badge-1 ms-1">1</span></h5>
                                    <button type="button" className="btn-close btn-close-white opacity-100" data-bs-dismiss="offcanvas" aria-label="Close" />
                                </div>
                                <div className="offcanvas-body scrollbar">
                                    <div className="scrollbar mb-3">
                                        <nav className="tab-02 mb-1 w-100">
                                            <div className="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                                                <button className="nav-link w-100 active" id="nav-tabRates-1" data-bs-toggle="tab" data-bs-target="#nav-rates-1" type="button" role="tab" aria-controls="nav-rates-1" aria-selected="true">
                                                    Ordinary
                                                </button>
                                                <button className="nav-link w-100" id="nav-tabRates-2" data-bs-toggle="tab" data-bs-target="#nav-rates-2" type="button" role="tab" aria-controls="nav-rates-2" aria-selected="false">
                                                    Express
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="tab-content border bg-transparent border-0" id="nav-tabContent">
                                        <div className="tab-pane fade active show" id="nav-rates-1" role="tabpanel" aria-labelledby="nav-tabRates-1">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="me-2 w-100">
                                                        <p>Changes in odds not accepted</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-nowrap"><a href="#" className="link">Clear all</a></p>
                                                    </div>
                                                </div>
                                                <div className="rates-box mb-3">
                                                    <div className="head">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="me-2 w-100">
                                                                <p className="mb-0 fs-14"><span className="badge live">Live</span> Ahal FC Al Ain FC</p>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn-close btn-close-white fs-12 opacity-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="body">
                                                        <p className="fs-12 fw-light mb-1 text-white-75">1x2</p>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <div className="me-2 w-50">
                                                                <p className="fs-14 mb-0">Ahal FC</p>
                                                            </div>
                                                            <div className="w-50 text-end">
                                                                <p className="fs-14 mb-0 text-blue text-nowrap">17.00</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="me-2 w-50">
                                                                <div className="price-input">
                                                                    <input type="text" name id defaultValue={0.00} className="w-100" />
                                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="img-fluid img1" />
                                                                </div>
                                                            </div>
                                                            <div className="w-50 text-end">
                                                                <p className="fs-12 mb-0 text-nowrap">Estimated payment</p>
                                                                <p className="fs-14 mb-0 text-nowrap"><span>0.00000000</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-rates-2" role="tabpanel" aria-labelledby="nav-tabRates-2">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="me-2 w-100">
                                                        <p>Changes in odds not accepted</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-nowrap"><a href="#" className="link">Clear all</a></p>
                                                    </div>
                                                </div>
                                                <div className="rates-box mb-3">
                                                    <div className="head">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="me-2 w-100">
                                                                <p className="mb-0 fs-14"><span className="badge live">Live</span> Ahal FC Al Ain FC</p>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn-close btn-close-white fs-12 opacity-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="body">
                                                        <p className="fs-12 fw-light mb-1 text-white-75">1x2</p>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <div className="me-2 w-50">
                                                                <p className="fs-14 mb-0">Ahal FC</p>
                                                            </div>
                                                            <div className="w-50 text-end">
                                                                <p className="fs-14 mb-0 text-blue text-nowrap">17.00</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="me-2 w-50">
                                                                <div className="price-input">
                                                                    <input type="text" name id defaultValue={0.00} className="w-100" />
                                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="img-fluid img1" />
                                                                </div>
                                                            </div>
                                                            <div className="w-50 text-end">
                                                                <p className="fs-12 mb-0 text-nowrap">Estimated payment</p>
                                                                <p className="fs-14 mb-0 text-nowrap"><span>0.00000000</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="offcanvas-bottom">
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="me-2 w-50">
                                            <p className="fs-12 mb-0 text-white-75">Total rate</p>
                                        </div>
                                        <div className="w-50 text-end">
                                            <p className="fs-14 mb-0"><span>0.00000000</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} /></p>
                                        </div>
                                    </div>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="me-2 text-white-75 w-50">
                                            <p className="fs-12 mb-0 text-nowrap">Estimated payment</p>
                                        </div>
                                        <div className="w-50 text-end">
                                            <p className="fs-14 mb-0 text-nowrap"><span>0.00000000</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} /></p>
                                        </div>
                                    </div>
                                    <button className="btn btn1 w-100 mt-3">Place an ordinary</button>
                                </div>
                            </div>
                            <div className="padding pt-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="scrollbar mb-3">
                                            <nav className="tab-02 mb-1">
                                                <div className="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="nav-tabBets-1" data-bs-toggle="tab" data-bs-target="#nav-bets-1" type="button" role="tab" aria-controls="nav-bets-1" aria-selected="true">
                                                        All Bets
                                                    </button>
                                                    <button className="nav-link" id="nav-tabBets-2" data-bs-toggle="tab" data-bs-target="#nav-bets-2" type="button" role="tab" aria-controls="nav-bets-2" aria-selected="false">
                                                        Major players
                                                    </button>
                                                    <button className="nav-link" id="nav-tabBets-3" data-bs-toggle="tab" data-bs-target="#nav-bets-3" type="button" role="tab" aria-controls="nav-bets-3" aria-selected="false">
                                                        Tournament table
                                                    </button>
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="row gx-2 align-items-center" style={{ display: 'none' }}>
                                            <div className="col-6">
                                                <div className="scrollbar">
                                                    <nav className="tab-02 mb-1 live-tab">
                                                        <div className="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                                                            <button className="nav-link active">
                                                                All
                                                            </button>
                                                            <button className="nav-link">
                                                                Live
                                                            </button>
                                                            <button className="nav-link">
                                                                Finished
                                                            </button>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div className="col-6 text-end">
                                                <div className="mb-2 d-flex justify-content-end" id="date1" onclose="window.location.reload();">
                                                    <div>
                                                        <DatePicker id="gameDate" onChange={onChange} value={dateValue} />
                                                    </div>
                                                    <button onClick={submitform} className="btn btn1 py-3 ms-1">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-content border bg-transparent border-0" id="nav-tabContent">
                                            <div className="tab-pane fade active show" id="nav-bets-1" role="tabpanel" aria-labelledby="nav-tabBets-1">
                                                <div className="table-responsive">
                                                    <table className="table table-01">
                                                        <thead>
                                                            <tr>
                                                                <th>Event</th>
                                                                <th className="text-center d-none d-sm-table-cell">User</th>
                                                                <th className="text-center d-none d-sm-table-cell">Time</th>
                                                                <th className="text-center d-none d-sm-table-cell">Odds</th>
                                                                <th className="text-end">Bet amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="all">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-bets-2" role="tabpanel" aria-labelledby="nav-tabBets-2">
                                                <div className="table-responsive">
                                                    <table className="table table-01">
                                                        <thead>
                                                            <tr>
                                                                <th>Event</th>
                                                                <th className="text-center d-none d-sm-table-cell">User</th>
                                                                <th className="text-center d-none d-sm-table-cell">Time</th>
                                                                <th className="text-center d-none d-sm-table-cell">Odds</th>
                                                                <th className="text-end">Bet amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="live">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-bets-3" role="tabpanel" aria-labelledby="nav-tabBets-3">
                                                <div className="table-responsive">
                                                    <table className="table table-01">
                                                        <thead>
                                                            <tr>
                                                                <th>Event</th>
                                                                <th className="text-center d-none d-sm-table-cell">User</th>
                                                                <th className="text-center d-none d-sm-table-cell">Time</th>
                                                                <th className="text-center d-none d-sm-table-cell">Odds</th>
                                                                <th className="text-end">Bet amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="finished">
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer />

                    </div>
                </div>
            </div>

            <BottomMenu />
        </>
    )
}

export default LiveEvents
