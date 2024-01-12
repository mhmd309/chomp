$(function () {
    // Add Class Active Page Menu
    $('.menu .info-text .tabs li').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Click Function Show List Menu Products
    $('.menu .info-text .tabs li').click(function () {
        if ($(this).data('filter') === 'all') {
            $('.menu .order-section > div').show();
        } else {
            $('.menu .order-section > div').hide();
            $($(this).data('filter')).show();
        };
    });
});