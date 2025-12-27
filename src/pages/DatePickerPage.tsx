import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
// MUI v4 imports for DateTime Picker
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ActivityLabels } from "../constants/activities";
import type { ActivityKey } from "../constants/activities";
import { getEntries } from "../utils/objectUtils";
import { format } from "date-fns";
import ErrorSnackbar from "../components/ErrorSnackbar";

const DatePickerPage: React.FC = () => {
    const location = useLocation();
    const isNoAtFirst = location.state?.noAtFirst === true;
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(
        new Date()
    );
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const initialActivities = useMemo<Record<ActivityKey, boolean>>(() => {
        return getEntries(ActivityLabels).reduce<Record<ActivityKey, boolean>>(
            (acc, [key]) => {
                acc[key] = false;
                return acc;
            },
            {} as Record<ActivityKey, boolean>
        );
    }, []);

    const [activities, setActivities] =
        useState<Record<ActivityKey, boolean>>(initialActivities);

    const toggleActivity = (key: ActivityKey): void => {
        setActivities((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleProceed = (): void => {
        if (!selectedDateTime) {
            setErrorMessage("Please choose a date and time for our coffee! ☕❤️");
            setOpenSnackbar(true);
            //   alert("Please choose a date and time for our coffee! ☕❤️");
            return;
        }

        const selectedActivities: ActivityKey[] = getEntries(activities)
            .filter(([, checked]) => checked)
            .map(([key]) => key);

        if (selectedActivities.length === 0) {
            setErrorMessage("Please select at least one activity! 💕");
            setOpenSnackbar(true);
            //   alert("Please select at least one activity! 💕");
            return;
        }

        const formattedDateTime = format(selectedDateTime, "MMMM d, yyyy");
        const formattedTime = format(selectedDateTime, "h:mm a");

        const activityTexts = selectedActivities.map((key) => ActivityLabels[key]);

        let activitiesText =
            activityTexts.length === 1
                ? activityTexts[0]
                : activityTexts.slice(0, -1).join(", ") +
                " and " +
                activityTexts.slice(-1);

        const baseMessage = `_Hey Thungu!${isNoAtFirst ? "!" : ""}_  😍

_Let's do *${activitiesText}* on *${formattedDateTime}* at *${formattedTime}*!_

Can't wait ❤️
– Sithushi`;

        const finalMessage = isNoAtFirst
            ? `I wanted to say no at first... but your effort was too cute to refuse 😍\n\n${baseMessage}`
            : baseMessage;
        const encodedMessage = encodeURIComponent(finalMessage);

        const yourPhoneNumber = "+94772265151"; // e.g., '94771234567'

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${yourPhoneNumber}&text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="container">
                <div className="card">
                    {/* Hero Illustration */}
                    <img
                        src="https://www.shutterstock.com/image-vector/young-people-hot-drinks-talking-600nw-2480344659.jpg"
                        alt="Adorable coffee cup holding a heart"
                        style={{
                            width: "220px",
                            borderRadius: "50%",
                            marginBottom: "32px",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
                        }}
                    />

                    <h1>Let's Plan Our Coffee Date! 👉👈</h1>

                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.7",
                            maxWidth: "640px",
                            margin: "24px auto 48px",
                            color: "#444",
                        }}
                    >
                        Pick the perfect day and time, and let me know what sounds fun to
                        you...
                    </p>

                    {/* Always-visible centered Date & Time Picker (no popper) */}
                    <div
                        style={{
                            marginBottom: "60px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "block",
                                textAlign: "center",
                                fontSize: "18px",
                                fontWeight: 600,
                                marginBottom: "24px",
                                color: "#2E8B57",
                                width: "100%",
                            }}
                        >
                            📅 Date & Time
                        </div>

                        <div style={{ maxWidth: "380px", width: "100%" }}>
                            <KeyboardDateTimePicker
                                variant="static"
                                ampm={true}
                                value={selectedDateTime}
                                onChange={(date) => setSelectedDateTime(date)}
                                minDate={new Date()}
                                format="MMM d, yyyy - h:mm a"
                                disableToolbar={false}
                                style={{
                                    background: "white",
                                    borderRadius: "16px",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                                }}
                            />
                        </div>
                    </div>

                    {/* Activities Selection */}
                    <section style={{ maxWidth: "560px", margin: "0 auto 60px" }}>
                        <label
                            style={{
                                display: "block",
                                fontSize: "18px",
                                fontWeight: 600,
                                marginBottom: "24px",
                                color: "#2E8B57",
                            }}
                        >
                            💕 Activities (feel free to pick more than one!)
                        </label>
                        <div
                            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                        >
                            {getEntries(ActivityLabels).map(([key, label]) => {
                                const isChecked = activities[key];
                                return (
                                    <label
                                        key={key}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "16px 20px",
                                            backgroundColor: isChecked ? "#E8F5E8" : "#FFFFFF",
                                            border: "2px solid #D4E4D4",
                                            borderRadius: "16px",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            boxShadow: isChecked
                                                ? "0 6px 16px rgba(34, 139, 34, 0.15)"
                                                : "0 2px 8px rgba(0, 0, 0, 0.05)",
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => toggleActivity(key)}
                                            style={{
                                                marginRight: "16px",
                                                width: "20px",
                                                height: "20px",
                                                accentColor: "#228B22",
                                            }}
                                        />
                                        <span style={{ fontSize: "17px", fontWeight: 500 }}>
                                            {label}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </section>

                    {/* Proceed Button */}
                    <button
                        className="primary-btn"
                        onClick={handleProceed}
                        style={{
                            fontSize: "20px",
                            padding: "16px 48px",
                            opacity:
                                !selectedDateTime ||
                                    getEntries(activities).filter(([, c]) => c).length === 0
                                    ? 0.6
                                    : 1,
                            cursor:
                                !selectedDateTime ||
                                    getEntries(activities).filter(([, c]) => c).length === 0
                                    ? "not-allowed"
                                    : "pointer",
                            boxShadow: "0 8px 20px rgba(34, 139, 34, 0.2)",
                        }}
                    >
                        Let's make this happen! 😍
                    </button>

                    {/* Closing Note */}
                    <p
                        style={{
                            marginTop: "64px",
                            fontSize: "16px",
                            fontStyle: "italic",
                            color: "#666",
                            lineHeight: "1.6",
                        }}
                    >
                        A little coffee with you feels so comfy✨ <br></br>I’m already smiling just thinking about it 🥰
                    </p>
                </div>
                <ErrorSnackbar
                    open={openSnackbar}
                    setOpen={setOpenSnackbar}
                    errorMessage={errorMessage}
                />
            </div>
        </MuiPickersUtilsProvider>
    );
};

export default DatePickerPage;
