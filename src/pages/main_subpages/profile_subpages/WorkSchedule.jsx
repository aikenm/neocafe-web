import React, { useState } from "react";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import "../../../styles/pages/main_subpages/profile_page.css";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const WorkSchedule = () => {
  const [workSchedule, setWorkSchedule] = useState({
    Monday: true,
    Tuesday: false,
    Wednesday: true,
    Thursday: true,
    Friday: false,
    Saturday: false,
    Sunday: true,
  });

  const currentDate = dayjs();
  const currentMonth = currentDate.month();
  const currentYear = currentDate.year();
  const firstDayOfMonth = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();

  const adjustedFirstDay = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

  const previousMonthPadding = adjustedFirstDay - 1;
  const totalDays = previousMonthPadding + daysInMonth;
  const nextMonthPadding = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);

  const lastMonth = currentDate.subtract(1, "month");
  const daysInLastMonth = lastMonth.daysInMonth();
  const previousMonthDays = Array.from(
    { length: previousMonthPadding },
    (_, i) => daysInLastMonth - previousMonthPadding + i + 1
  );

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const nextMonthDays = Array.from(
    { length: nextMonthPadding },
    (_, i) => i + 1
  );

  const combinedDays = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ];

  return (
    <div className="schedule-page">
      <div className="calendar-container">
        <div className="calendar-container-info">
          <div className="info-block">
            <div className="working-day-square"></div>
            <span className="calendar-container-info-text">Рабочий день</span>
          </div>
          <div className="info-block">
            <div className="day-off-square"></div>
            <span className="calendar-container-info-text">Выходной</span>
          </div>
        </div>
        <div className="days-abbreviations-block">
          <span className="days-abbreviation">Пн</span>
          <span className="days-abbreviation">Вт</span>
          <span className="days-abbreviation">Ср</span>
          <span className="days-abbreviation">Чт</span>
          <span className="days-abbreviation">Пт</span>
          <span className="days-abbreviation">Сб</span>
          <span className="days-abbreviation">Вс</span>
        </div>
        {combinedDays.map((day, index) => {
          const isPreviousMonth = index < previousMonthPadding;
          const isNextMonth = index >= previousMonthPadding + daysInMonth;
          const dayOfMonth = index - previousMonthPadding + 1;
          const dateToCheck = dayjs(
            new Date(
              currentYear,
              isPreviousMonth
                ? currentMonth - 1
                : isNextMonth
                ? currentMonth + 1
                : currentMonth,
              day
            )
          );
          const isWorkingDay = workSchedule[dateToCheck.format("dddd")];
          const isCurrentDay =
            currentDate.date() === dayOfMonth &&
            currentDate.month() === dateToCheck.month();

          return (
            <div
              key={index}
              className={`day ${isCurrentDay ? "current-day" : ""} ${
                isWorkingDay ? "working-day" : "day-off"
              } ${isPreviousMonth ? "previous-month" : ""} ${
                isNextMonth ? "next-month" : ""
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSchedule;
