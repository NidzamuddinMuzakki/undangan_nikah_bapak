import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import {DivMap,DivButtonSimpanKalender ,DivContainerKotakTanggal,DivLineTanggal, DivTanggal,DivKotakTanggal, DivSpanNumber, DivSpanType } from "./styled";
import { useEffect, useState } from "react";
// import BackgroundImage from './../../images/01-19.png'
const HitungMundurDiv = ()=>{
    const [timers, setTimers] = useState([]);
    const [newTimerTitle, setNewTimerTitle] = useState("Nidzam");
    const [newTimerCategory, setNewTimerCategory] = useState("Nidzam");
    const [newTimerDateTime, setNewTimerDateTime] = useState("2025-01-12 00:00:00");

    // const categoryColors = {
    //     Meeting: "bg-primary",
    //     Birthday: "bg-danger",
    //     Reminder: "bg-success",
    // };

    useEffect(() => {
        const intervalIds = {};

        const updateTimers = () => {
            setTimers((prevTimers) =>
                prevTimers.map((timer) => {
                    const targetTime = new Date(timer.targetDateTime)
                                       .getTime();
                    const currentTime = new Date().getTime();
                    const timeRemaining = Math.max(
                        Math.floor((targetTime - currentTime) / 1000),
                        0
                    );

                    if (timeRemaining === 0) {
                        clearInterval(intervalIds[timer.id]);
                        return { 
                        ...timer, isRunning: false, timeRemaining: 0 };
                    }

                    return { ...timer, timeRemaining };
                })
            );
        };

        timers.forEach((timer) => {
            if (timer.isRunning && timer.timeRemaining > 0) {
                intervalIds[timer.id] = setInterval(updateTimers, 1000);
            }
        });

        return () => {
            Object.values(intervalIds).forEach((intervalId) =>
                clearInterval(intervalId)
            );
        };
    }, [timers]);

    // const removeTimer = (timerId) => {
    //     setTimers((prevTimers) =>
    //         prevTimers.filter((timer) => timer.id !== timerId)
    //     );
    // };

    const calculateTimeRemaining = (targetTime) => {
        const currentTime = new Date().getTime();
        const timeDifference = targetTime - currentTime;
        const secondsRemaining = 
                Math.max(Math.floor(timeDifference / 1000), 0);
        return secondsRemaining;
    };

    const formatTimeRemaining = (seconds) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return {
            days,
            hours,
            minutes,
            seconds: remainingSeconds,
        };
    };

    const addTimer = () => {
        if (!newTimerTitle || !newTimerCategory || !newTimerDateTime) 
            return;
            
        // Convert to milliseconds since epoch
        const targetDateTime = new Date(newTimerDateTime).getTime(); 
        
        const newTimer = {
            id: timers.length + 1,
            category: newTimerCategory,
            targetDateTime,
            // Calculate time remaining here
            timeRemaining: calculateTimeRemaining(targetDateTime), 
            isRunning: true,
            title: newTimerTitle,
            showTitleInput: false,
        };

        setTimers([...timers, newTimer]);

        setNewTimerTitle("");
        setNewTimerCategory("");
        setNewTimerDateTime("");
    };
  
    return(
        <div onLoad={()=>addTimer()} style={{backgroundColor:"#43638B", height:600, paddingTop:'25px',position:'relative', }}>
          
            <DivTanggal >   
                <DivLineTanggal/>
                SUNDAY, 12 JANUARI 2025
                <DivLineTanggal/>

            </DivTanggal>
            <DivContainerKotakTanggal className="zoom">
            {timers.map((timer) => {
                        const timeRemaining = formatTimeRemaining(
                            timer.timeRemaining
                        );
                        return(
                <>
                    <DivKotakTanggal>
                        <DivSpanNumber>
                            {timeRemaining.days}
                        </DivSpanNumber>
                        <DivSpanType>
                            Hari
                        </DivSpanType>
                    </DivKotakTanggal>
                    <DivKotakTanggal>
                        <DivSpanNumber>
                        {timeRemaining.hours}
                        </DivSpanNumber>
                        <DivSpanType>
                            Jam
                        </DivSpanType>
                    </DivKotakTanggal>
                    <DivKotakTanggal>
                        <DivSpanNumber>
                        {timeRemaining.minutes}
                        </DivSpanNumber>
                        <DivSpanType>
                            Menit
                        </DivSpanType>

                    </DivKotakTanggal>
                    <DivKotakTanggal>
                        <DivSpanNumber>
                        {timeRemaining.seconds}
                        </DivSpanNumber>
                        <DivSpanType>
                            Detik
                        </DivSpanType>

                    </DivKotakTanggal>
                </>
            )})}
               
            </DivContainerKotakTanggal>
            <div style={{display:'flex', justifyContent:'center'}}>

                <DivButtonSimpanKalender>
                    <FaRegCalendarAlt style={{fontSize:'17px'}}></FaRegCalendarAlt>
                    <span>SIMPAN KE KALENDER</span>
                </DivButtonSimpanKalender>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <DivMap className="muncul">
                <iframe title="nidzammap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.54290620757!2d109.29621231526242!3d-0.02742528211647485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d592b6e4d1a99%3A0xc68c0646502ffbe!2sMasjid%20Raya%20Mujahidin!5e0!3m2!1sid!2sid!4v1731903410765!5m2!1sid!2sid"  height="450" style={{border:0,borderRadius:'10px',width:'100%'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
                </DivMap>
            </div>
        </div>
    )
}

export default HitungMundurDiv