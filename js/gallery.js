$(function () {
    var token = "IGQVJVYXhlUERnak9wbl81NllNZADBGRHk4YV9kWTYxYUdSekNHN0pnYUV5aVg5aWVfTzZAYU2pvS01QSkp4X1Q0R2dxdnJfR3d1UWYzV2VfUnVSUXRJb3lNelIyejRYRktvS1FnWElJcDczWi1sby1ZANAZDZD";

    /*
        발급된 토큰은 장기 실행 액세스 토큰으로 60일간 사용이 가능합니다.
        https://developers.facebook.com/docs/instagram-basic-display-api/guides/long-lived-access-tokens

        발급된 토큰은 만료일(60일)이내에 refresh_access_token혹은, 페이스북 개발자 센터내의 토큰 재발급을 통해 연장을 해주어야합니다.
        https://developers.facebook.com/docs/instagram-basic-display-api/reference/refresh_access_token
    */

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://graph.instagram.com/me/media?access_token=" + token + "&fields=id,caption,media_type,media_url,thumbnail_url,permalink",
        success: function (response) {
            if (response.data != undefined && response.data.length > 0) {
                for (i = 0; i < response.data.length; i++) {
                    if (response.data[i]) {
                        var item = response.data[i];
                        var image_url = "";
                        var post = "";

                        if (item.media_type === "VIDEO") {
                            image_url = item.thumbnail_url;
                        } else {
                            image_url = item.media_url;
                        }

                        
                        post += '<div class="instagram_item instagram_item' + i + '">';
                        post += '<a href="' + item.permalink + '" target="_blank" rel="noopener noreferrer" style="background-image: url(' + image_url + ');">';
                        post += '</a>';
                        post += '</div>';

                        $('#instagram').append(post);
                    } else {
                        // if no curent item
                        show_fallback('#insta-item-' + i)
                    }
                }
            } else {
                // if api error
                show_fallback('.instagram-item')
            }
        },
        error: function () {
            // if http error
            show_fallback('.instagram-item')
        }

    });

    function show_fallback(el) {
        $(el).addClass('loaded fallback');
    }
});
