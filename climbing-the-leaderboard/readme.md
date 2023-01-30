https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true#!
Một người chơi trò chơi arcade muốn leo lên đầu bảng xếp hạng và theo dõi thứ hạng của họ. Trò chơi sử dụng Xếp hạng dày đặc , vì vậy bảng xếp hạng của trò chơi hoạt động như sau:

Người chơi có số điểm cao nhất được xếp hạng sốtrên bảng xếp hạng.
Những người chơi có số điểm bằng nhau sẽ nhận được cùng một số xếp hạng và (những) người chơi tiếp theo sẽ nhận được số xếp hạng ngay sau đó.
Thí dụ



Những người chơi xếp hạng sẽ có cấp bậc,,, và, tương ứng. Nếu điểm số của người chơi là,và, thứ hạng của họ sau mỗi trận đấu là,và. Trở lại.

Mô tả chức năng

Hoàn thành chức năng bảng xếp hạng leo núi trong trình chỉnh sửa bên dưới.

leoLeaderboard có (các) thông số sau:

int rank[n] : điểm số trên bảng xếp hạng
int player[m] : điểm của người chơi
trả lại

int[m]: thứ hạng của người chơi sau mỗi điểm số mới
Định dạng đầu vào

Dòng đầu tiên chứa một số nguyên, số lượng người chơi trên bảng xếp hạng.
Dòng tiếp theo chứasố nguyên cách nhau dấu cách, bảng xếp hạng theo thứ tự giảm dần.
Dòng tiếp theo chứa một số nguyên,, số trò chơi mà người chơi chơi.
Dòng cuối cùng chứasố nguyên cách nhau dấu cách, trò chơi ghi điểm.

Hạn chế

vì
vì
Bảng xếp hạng hiện có,, theo thứ tự giảm dần .
Điểm số của người chơi,, theo thứ tự tăng dần .
nhiệm vụ phụ

Vìcủa điểm tối đa:

