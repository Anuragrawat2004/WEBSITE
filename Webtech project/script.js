document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('totalCostForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(form);
        var checkIn = formData.get('check_in');
        var checkOut = formData.get('check_out');
        var adults = parseInt(formData.get('adults'));
        var childs = parseInt(formData.get('childs'));
        var rooms = parseInt(formData.get('rooms'));
        var totalCost = calculateTotalCost(checkIn, checkOut, adults, childs, rooms);
        alert('Total cost: Rs' + totalCost);
    });
    function calculateTotalCost(checkIn, checkOut, adults, childs, rooms) {
        var costPerNight = 1000;
        var numberOfNights = calculateNumberOfNights(checkIn, checkOut);
        return costPerNight * numberOfNights * rooms;
    }
    function calculateNumberOfNights(checkIn, checkOut) {
        var startDate = new Date(checkIn);
        var endDate = new Date(checkOut);
        var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
});
