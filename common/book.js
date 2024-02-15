document.addEventListener("DOMContentLoaded", function () {
  const checkInInput = document.getElementById("check-in");
  const checkOutInput = document.getElementById("check-out");

  flatpickr(checkInInput, {
    minDate: "today",
    dateFormat: "Y-m-d",
    onChange: function (selectedDates, dateStr) {
      const minCheckOutDate = new Date(selectedDates[0]);
      minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);

      flatpickr(checkOutInput, {
        minDate: minCheckOutDate,
        dateFormat: "Y-m-d",
      });

      const selectedCheckOutDate = flatpickr.parseDate(
        checkOutInput.value,
        "Y-m-d"
      );
      if (selectedCheckOutDate < minCheckOutDate) {
        checkOutInput.value = "";
      }
    },
  });

  flatpickr(checkOutInput, {
    dateFormat: "Y-m-d",
  });
});
