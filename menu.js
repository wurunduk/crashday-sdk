<!--


function OpenPage( head, title )
// ================
{

        var MenuStr = "";

        MenuStr += '<a name="startofpage"></a>';

        MenuStr += '<center>';
        MenuStr += '<br>&nbsp;<br><table width=1000 border=0 cellpadding=0 cellspacing=0>';
	MenuStr += '<tr><td height=40 width=1000 colspan=6><h1>Crashday Software Development Kit<font style="color:#BF2E11">_Documentation</font><img src="topline.jpg" align=right width=262 height=110></h1></td>';
	MenuStr += '</tr>';
	MenuStr += '<tr><td height=5 width=1000 colspan=6 style="background-color:#777777">&nbsp;</td>';
	MenuStr += '</tr>';
	MenuStr += '<tr>';
	MenuStr += '  <td style="background-color:#e0e0e0" valign=top width=10 height=1>&nbsp;</td>';
	MenuStr += '  <td style="background-color:#e0e0e0" valign=top width=240 height=1><br>';

	MenuStr += '  <b class="caption">1. Introduction</b><br><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="index.html">&gt; Welcome!</a><br>';

	MenuStr += '  <br><b class="caption">2. Overview</b><br><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="2_overview_folders.html">&gt; Folders</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="2_overview_filetypes.html">&gt; File types</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="2_overview_tools.html">&gt; Tools</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="2_overview_generalhints.html">&gt; General hints</a><br>';

	MenuStr += '  <br><b class="caption">3. Creating Cars</b><br><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="3_cars_realization.html">&gt; Technical realization of cars</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="3_cars_tools.html">&gt; Tools required</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="3_cars_files.html">&gt; Overview of car files</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="3_cars_modeling.html">&gt; Modeling guidelines</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="3_cars_texturing.html">&gt; Texturing guidelines</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="3_cars_ccasetup.html">&gt; Setup of car specification file</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="3_cars_customwheels.html">&gt; Custom wheels</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="3_cars_shopparts.html">&gt; Shop and tuning parts</a><br>';

	MenuStr += '  <br><b class="caption">4. Creating Track Pieces</b><br><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="4_tiles_realization.html">&gt; Technical realization of track p.</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="4_tiles_tools.html">&gt; Tools required</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="4_tiles_files.html">&gt; Overview of track piece files</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="4_tiles_modelingtexturing.html">&gt; Modeling &amp; texturing guidelines</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="4_tiles_cflsetup.html">&gt; Tile specification file</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="4_tiles_vegsetup.html">&gt; Vegetation setup</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="4_tiles_caisetup.html">&gt; AI driver information</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="4_tiles_cstsetup.html">&gt; Track piece stunt definitions</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="4_tiles_editorintegration.html">&gt; Track editor integration</a><br>';


	MenuStr += '  <br><b class="caption">5. Tools Reference</b><br><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="5_tools_makep3d.html">&gt; MakeP3D (3D model tools)</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="5_tools_zmodeler.html">&gt; ZModeler export (3D model tools)</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="5_tools_showp3d.html">&gt; ShowP3D (3D model tools)</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="5_tools_carmanag.html">&gt; Car Manager (car management)</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="5_tools_showcfl.html">&gt; ShowCFL (track piece tools)</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="5_tools_vegetedit.html">&gt; VegetEdit (track piece tools)</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="5_tools_stuntedit.html">&gt; StuntEdit (track piece tools)</a><br>';

	MenuStr += '  <br><b class="caption">6. Technical Reference</b><br><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="6_technical_shaders.html">&gt; Textures &amp; shaders</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="6_technical_existingtex.html">&gt; Existing materials overviews</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="6_technical_lod.html">&gt; Level Of Detail implementation</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="6_technical_ccc.html">&gt; Crashday Car Certificate</a><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="6_technical_p3dformat.html">&gt; P3D model file format</a><br>';

	MenuStr += '  <br><b class="caption">7. Examples</b><br><br>';
	MenuStr += '  &nbsp;&nbsp;<a href="7_examples.html">&gt; Track piece reference models</a><br>';

	MenuStr += '  <br><br><br>&nbsp;</td>';
        MenuStr += '  <td width=60 height=600>&nbsp;</td>';
        MenuStr += '  <td valign=top class="content" height=600><br><br>';
        MenuStr += '  <b class="caption">' + head + ' &gt;</b>';
        MenuStr += '  <h2>' + title + '</h2><br>&nbsp;<br>';

        document.write( MenuStr );     	// Dokument erstellen
}



function ClosePage()
// =================
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
         MenuStr += '<div style="text-align:center; font-size:11px; color:#444444; font-family:Verdana,Arial,Helvetica">&nbsp;<br>&copy; 2006 <a href="http://www.moonbyte.de" target="_blank">Moon Byte Studios</a> / <a href="http://www.replaystudios.de" target="_blank">Replay Studios</a>. The official forums: <a href="http://www.crashday-game.de/forum/" target="_blank">Click here</a></div><br><br>';

         document.write( MenuStr );   // Dokument erstellen
}

//-->