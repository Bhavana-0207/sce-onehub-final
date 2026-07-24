export const timetable = {
  className: "CSE-A",
  semester: "III",
  hall: "RV 409",

  timings: [
    "09:15-10:05",
    "10:05-10:55",
    "11:05-11:55",
    "11:55-12:45",
    "1:25-2:15",
    "2:15-3:05",
    "3:15-4:00",
    "4:00-4:45",
  ],

  days: [
    {
      day: "Monday",
      periods: [
        "24MA301A",
        "24EM301A(A)",
        "24CS302A",
        "24CS301A",
        "24CS304A",
        "24CS303A",
        "24ES301A(L)",
        "24ES301A(L)",
      ],
    },

    {
      day: "Tuesday",
      periods: [
        "24CS301A",
        "24MA301A",
        "24CS304A",
        "24CS303A",
        "24ES301A",
        "—",
        "24CS311A / 24CS312A",
        "24CS311A / 24CS312A",
      ],
    },

    {
      day: "Wednesday",
      periods: [
        "24CS303A(L)/24CS304A(L)",
        "24CS303A(L)/24CS304A(L)",
        "24CS302A",
        "24ES301A",
        "24MA301A",
        "24CS304A",
        "24CS301A",
        "24CS302A",
      ],
    },

    {
      day: "Thursday",
      periods: [
        "24ES301A",
        "24EM301A(V)",
        "VAC",
        "VAC",
        "24CS301A",
        "24MA301A(T)",
        "24CS303A(L)/24CS304A(L)",
        "24CS303A(L)/24CS304A(L)",
      ],
    },

    {
      day: "Friday",
      periods: [
        "24CS304A",
        "—",
        "24CS311A / 24CS312A",
        "24CS311A / 24CS312A",
        "24CS303A",
        "24CS302A",
        "24MA301A",
        "24ES301A",
      ],
    },
  ],
};

export const subjects: Record<
  string,
  {
    title: string;
    faculty: string;
  }
> = {
  "24MA301A": {
    title: "Probability and Statistics",
    faculty: "Dr. N. Subashini",
  },

  "24CS301A": {
    title: "Data Structures",
    faculty: "Ms. C. Maria Rhythm",
  },

  "24CS302A": {
    title: "Object Oriented Programming",
    faculty: "Ms. T. Nagalakshmi",
  },

  "24ES301A": {
    title: "Digital Principles and Computer Organization",
    faculty: "Ms. J. Sathia Parkavi",
  },

  "24CS303A": {
    title: "Essentials of Web Development",
    faculty: "Mr. D. Boobala Muralitharan",
  },

  "24CS304A": {
    title: "Foundations of Data Science",
    faculty: "Dr. S. Mohana",
  },

  "24CS311A": {
    title: "Data Structures Laboratory",
    faculty: "Ms. C. Maria Rhythm",
  },

  "24CS312A": {
    title: "Object Oriented Programming Laboratory",
    faculty: "Ms. T. Nagalakshmi",
  },

  VAC: {
    title: "Value Added Course",
    faculty: "Department",
  },
};