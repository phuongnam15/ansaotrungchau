
function autodata(){
		var doc=document;
doc.getElementById('ID_NGAYDL').selectedIndex = 0;
doc.getElementById("ID_NAMDL").selectedIndex = 0;
doc.getElementById("ID_GIODL").selectedIndex = 0;
doc.getElementById("ID_GIOITINH").selectedIndex = 0;
doc.getElementById("ID_THANGDL").selectedIndex = 0;


doc.getElementById('ID_TEN').value = "Mike Đỗ ";
doc.getElementById('ID_GIOITINH').value =1;
doc.getElementById('ID_NGAYDL').value = 19;
doc.getElementById('ID_THANGDL').value = 11;
doc.getElementById("ID_NAMDL").value = 1981;
doc.getElementById('ID_GIODL').value =0;
doc.getElementById('ID_SAO3').value = "TCP1";
}
autodata();