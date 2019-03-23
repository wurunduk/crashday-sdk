function OpenPage( head, title )
{
        var MenuStr = "";

        MenuStr += '<a name="startofpage"></a>';

        MenuStr += '<center>';
        MenuStr += '<br>&nbsp;<br><table width=1000 border=0 cellpadding=0 cellspacing=0>';
      	MenuStr += '<tr><td height=40 width=1000 colspan=6><h1>Crashday: Redline Edition SDK<font style="color:#BF2E11">_Documentation</font><img src="images/incu.png" align=right width=262 height=110></h1></td>';
      	MenuStr += '</tr>';
      	MenuStr += '<tr><td height=5 width=1000 colspan=6 style="background-color:#777777">&nbsp;</td>';
      	MenuStr += '</tr>';
      	MenuStr += '<tr>';
      	MenuStr += '  <td style="background-color:#e0e0e0" valign=top width=10 height=1>&nbsp;</td>';
      	MenuStr += '  <td style="background-color:#e0e0e0" valign=top width=240 height=1><br>';

        MenuStr += '  <b class="caption"><a href="../index.html"><- sections page</a></b><br><br>';

      	MenuStr += '  <b class="caption">1. Introduction</b><br><br>';
      	MenuStr += '  &nbsp;&nbsp;<a href="index.html">&gt; Welcome!</a><br>';

        MenuStr += '  <br><b class="caption">2. Overview</b><br><br>';
      	MenuStr += '  &nbsp;&nbsp;<a href="2_overview_folders.html">&gt; Folders</a><br>';
      	MenuStr += '  &nbsp;&nbsp;<a href="2_overview_filetypes.html">&gt; File types</a><br>';
      	MenuStr += '  &nbsp;&nbsp;<a href="2_overview_tools.html">&gt; Tools</a><br>';
      	MenuStr += '  &nbsp;&nbsp;<a href="2_overview_generalhints.html">&gt; General hints</a><br>';

      	MenuStr += '  <br><b class="caption">3. Modding basics</b><br><br>';
      	MenuStr += '  &nbsp;&nbsp;<a href="3_started_modding.html">&gt;  Getting started with modding</a><br>';

      	MenuStr += '  <br><br><br>&nbsp;</td>';
        MenuStr += '  <td width=60 height=600>&nbsp;</td>';
        MenuStr += '  <td valign=top class="content" height=600><br><br>';
        MenuStr += '  <b class="caption">' + head + ' &gt;</b>';
        MenuStr += '  <h2>' + title + '</h2><br>&nbsp;<br>';

        document.write( MenuStr );
}



function ClosePage()
{
	 var MenuStr = "";

   MenuStr += '<br><br>&nbsp;</td>';
   MenuStr += '  <td valign=top width=50 height=1>&nbsp;</td>';
	       MenuStr += '  <td style="background-color:#e0e0e0" valign=top width=5 height=1>&nbsp;</td>';
         MenuStr += '</tr>';
	        MenuStr += '<tr><td height=5 width=1000 colspan=6 style="background-color:#777777">&nbsp;</td>';
	         MenuStr += '</tr>';
         MenuStr += '</table>';
         MenuStr += '</center>';
         MenuStr += '<div style="text-align:center; font-size:11px; color:#444444; font-family:Verdana,Arial,Helvetica">&nbsp;<br>&copy; 2006 <a href="http://www.moonbytegames.com/" target="_blank">Moon Byte Studios</a>. <a href="https://discord.me/crashday" target="_blank">Our Discord channel</a>. <a href="http://store.steampowered.com/app/508980/Crashday_Redline_Edition/" target="_blank">Steam page</a>.</div><br><br>';

         document.write( MenuStr );
}
