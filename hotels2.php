<br><br><br><br>
<?php
    session_start();
    if(isset($_SESSION['username']))

    echo    '<div class="ajax-forma">   
                <p class="info-small">Klikom na dugme "Promijeni" pored datog hotela, bit ćete vraćeni na vrh stranice i ID datog hotela će se nalaziti u polju "ID :"<p>
                <p class="info-small">Popunite formu bez da mijenjate ID i kliknite na dugme "Promijeni" koje se nalazi ispod forme.<p>
                <form class="register-form" method="post" enctype="multipart/form-data">
                    
                    <label for="idHotela" class="register-label">ID :</label>
                    <input id="idHotela" type="text" class="contact-input">
                    <div id="idHotelaErrorProvider">
                       &nbsp;&nbsp;
                    </div>
                    <br><br>

                    <label for="nazivHotela" class="register-label">Naziv :</label>
                    <input id="nazivHotela" type="text"class="register-input">
                    <div id="nazivHotelaErrorProvider">
                       &nbsp;&nbsp;
                    </div>
                    <br><br>

                    <label for="urlHotela" class="register-label">Url slike:</label>
                    <input id="urlHotela" type="text" class="register-input">
                    <div id="urlHotelaErrorProvider">
                        &nbsp;&nbsp;
                    </div>
                    <br><br>

                    <label for="opisHotela" class="register-label">Opis :</label>
                    <input id="opisHotela" type="text" class="register-input">
                    <div id="opisHotelaErrorProvider">
                       &nbsp;&nbsp;
                    </div>
                    <br><br>
                    <input id="registrujHotel" type="button" value="Dodaj" class="register-button" onclick="createHotel()">
                    <input id="promijeniHotel" type="button" value="Promijeni" class="register-button" onclick="updateHotel()">
                </form>
            </div>';
    /*else 
    echo    '<div style="display:none"><div class="ajax-forma">   
                <p class="info-small">Klikom na dugme "Promijeni" pored datog hotela, bit ćete vraćeni na vrh stranice i ID datog hotela će se nalaziti u polju "ID :"<p>
                <p class="info-small">Popunite formu bez da mijenjate ID i kliknite na dugme "Promijeni" koje se nalazi ispod forme.<p>
                <form class="register-form" method="post" enctype="multipart/form-data">
                    
                    <label for="idHotela" class="register-label">ID :</label>
                    <input id="idHotela" type="text" class="contact-input">
                    <div id="idHotelaErrorProvider">
                       &nbsp;&nbsp;
                    </div>
                    <br><br>

                    <label for="nazivHotela" class="register-label">Naziv :</label>
                    <input id="nazivHotela" type="text"class="register-input">
                    <div id="nazivHotelaErrorProvider">
                       &nbsp;&nbsp;
                    </div>
                    <br><br>

                    <label for="urlHotela" class="register-label">Url slike:</label>
                    <input id="urlHotela" type="text" class="register-input">
                    <div id="urlHotelaErrorProvider">
                        &nbsp;&nbsp;
                    </div>
                    <br><br>

                    <label for="opisHotela" class="register-label">Opis :</label>
                    <input id="opisHotela" type="text" class="register-input">
                    <div id="opisHotelaErrorProvider">
                       &nbsp;&nbsp;
                    </div>
                    <br><br>
                    <input id="registrujHotel" style="display:none">
                    <input id="promijeniHotel" style="display:none">
                </form>
            </div></div>';*/
?>
<div id="sadrzaj-novosti">
     
</div>