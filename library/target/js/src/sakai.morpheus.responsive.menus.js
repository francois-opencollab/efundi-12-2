function toggleToolsNav(a){if(a){a.preventDefault()}$PBJQ("body").toggleClass("toolsNav--displayed");if($PBJQ("body").hasClass("toolsNav--displayed")){createDHTMLMask(toggleToolsNav)}else{removeDHTMLMask()}}$PBJQ(document).ready(function(){function a(){function b(){if($PBJQ("#roleSwitchDropDown").is(".open")){$PBJQ("#roleSwitchDropDownToggle").trigger("click")}}function c(d){if(d.keyCode==27){b();return false}return true}$PBJQ("#roleSwitchDropDownToggle").attr("aria-hidden","false");$PBJQ("#roleSwitchDropDown").attr("aria-hidden","true").attr("aria-label","submenu");$PBJQ("#roleSwitchDropDownToggle").click(function(){$PBJQ("#roleSwitchDropDown").css("right",$PBJQ(window).width()-20-($PBJQ("#roleSwitchDropDownToggle").offset().left+$PBJQ("#roleSwitchDropDownToggle").width()));$PBJQ("#roleSwitchDropDown").toggleClass("open");if($PBJQ("#roleSwitchDropDown").is(".open")){$PBJQ("#roleSwitchDropDown").attr("aria-hidden","false");$PBJQ(document.body).prepend('<div class="user-dropdown-overlay"></div>');$PBJQ(".user-dropdown-overlay").on("click",function(){b()});$PBJQ(document.body).on("keyup",c);setTimeout(function(){$PBJQ("#roleSwitchDropDown").find("a, :input").focus()})}else{$PBJQ("#roleSwitchDropDown").attr("aria-hidden","true");$PBJQ(".user-dropdown-overlay").remove();$PBJQ(document.body).off("keyup",c);$PBJQ("#roleSwitchDropDownToggle").focus()}})}$PBJQ("#roleSwitchSelect").on("change",function(){if($PBJQ("option:selected",this).text()!==""){document.location=$PBJQ("option:selected",this).val()}else{$PBJQ(this)[0].selectedIndex=0}});if(MorpheusViewportHelper.isPhone()){a()}else{$PBJQ("#roleSwitch").addClass("menu-not-setup")}});$PBJQ(".js-toggle-tools-nav","#skipNav").on("click",toggleToolsNav);