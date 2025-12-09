import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { getFacilityById } from "@/data/healthFacilities";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Schedule = () => {
  const { facilityId, service } = useParams<{ facilityId: string; service: string }>();
  const navigate = useNavigate();
  const facility = getFacilityById(facilityId || "");
  
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    "JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI",
    "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Get the day of week for the first day (0 = Sunday, we want Monday = 0)
    let startDay = firstDay.getDay() - 1;
    if (startDay < 0) startDay = 6;

    const calendarDays = [];

    // Add days from previous month
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      calendarDays.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthDays - i),
      });
    }

    // Add days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Add days from next month to complete the grid
    const remainingDays = 42 - calendarDays.length;
    for (let i = 1; i <= remainingDays; i++) {
      calendarDays.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    return calendarDays;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (date: Date, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) {
      return; // Can't select past dates
    }

    navigate(`/pendaftaran/${facilityId}/${encodeURIComponent(service || "")}/${date.toISOString().split('T')[0]}`);
  };

  const calendarDays = getDaysInMonth(currentDate);
  const today = new Date();

  if (!facility) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-primary">Fasilitas tidak ditemukan</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-8">
            Jadwal Pemeriksaan
          </h1>

          <div className="max-w-4xl mx-auto">
            {/* Calendar Card */}
            <div className="ehealth-card overflow-hidden animate-scale-in">
              {/* Calendar Header */}
              <div className="bg-gradient-teal text-primary-foreground p-6 flex items-center justify-between">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-4">
                  <span className="text-4xl md:text-6xl font-bold">
                    {today.getDate()}
                  </span>
                  <div className="text-left">
                    <div className="text-2xl md:text-3xl font-bold">
                      {months[currentDate.getMonth()]}
                    </div>
                    <div className="text-lg md:text-xl opacity-80">
                      {currentDate.getFullYear()}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Calendar Body */}
              <div className="bg-secondary p-4 md:p-6">
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {days.map((day) => (
                    <div key={day} className="text-center text-muted-foreground font-medium py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((dayInfo, index) => {
                    const isToday = 
                      dayInfo.date.toDateString() === today.toDateString();
                    const isPast = dayInfo.date < today && !isToday;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDateClick(dayInfo.date, dayInfo.isCurrentMonth)}
                        disabled={!dayInfo.isCurrentMonth || isPast}
                        className={`
                          aspect-square flex items-center justify-center rounded-lg font-medium transition-all
                          ${dayInfo.isCurrentMonth 
                            ? isPast
                              ? "text-muted-foreground/50 cursor-not-allowed"
                              : isToday
                                ? "bg-primary text-primary-foreground font-bold"
                                : "text-foreground hover:bg-primary/20 cursor-pointer"
                            : "text-muted-foreground/30"
                          }
                        `}
                      >
                        {dayInfo.day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="mt-6 text-center text-muted-foreground">
              <p>Pilih tanggal untuk melanjutkan pendaftaran</p>
              <p className="text-sm mt-2">
                Layanan: <span className="font-semibold text-primary">{decodeURIComponent(service || "")}</span>
              </p>
              <p className="text-sm">
                Fasilitas: <span className="font-semibold text-primary">{facility.name}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
