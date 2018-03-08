import React from 'react'

const Entreprise20162018 = ()=>({
    render: function() {
      return (
        <section className="article-content clearfix" itemProp="articleBody">

        <p><span style={{fontSize: '18pt'}}><strong>Les Mini-Entreprises 2017-2018</strong></span></p>
                <table cellSpacing={0} cellPadding={0} border={0}>
                <tbody>
                    <tr>
                    <td><iframe title="carte_mini_2017_2018" src="https://www.google.com/maps/d/embed?mid=1TKMDluG9jeRmYv53jy9M5c6tWQg" width={640} height={480} /></td>
                    <td valign="top">
                        <p>Pour afficher l'intégralité des Mini-Entreprises, développez le menu intégré de la carte :</p>
                        <p><img src="/images/Systeme/My-maps-dev.png" alt="Menu intégré" title="Menu intégré" /></p>
                        <p>Par défaut, les quatre premières Mini-Entreprises sont affichées.</p>
                        <p>Vous devez développer la liste pour pouvoir accéder à toutes les fiche des Mini-Entreprises.</p>
                        <p>&nbsp;</p>
                    </td>
                    </tr>
                </tbody>
                </table>


        <p><span style={{fontSize: '18pt'}}><strong>Les Mini-Entreprises 2016-2017</strong></span></p>
                <table cellSpacing={0} cellPadding={0} border={0}>
                <tbody>
                    <tr>
                    <td><iframe title="carte_mini_2016_2017" src="https://www.google.com/maps/d/embed?mid=1F_DYgEHyOBoBx0FZce70EKc4_9E" width={640} height={480} /></td>
                    <td valign="top">
                        <p>Pour afficher l'intégralité des Mini-Entreprises, développez le menu intégré de la carte :</p>
                        <p><img src="/images/Systeme/My-maps-dev.png" alt="Menu intégré" title="Menu intégré" /></p>
                        <p>Par défaut, les quatre premières Mini-Entreprises sont affichées.</p>
                        <p>Vous devez développer la liste pour pouvoir accéder à toutes les fiche des Mini-Entreprises.</p>
                        <p>&nbsp;</p>
                    </td>
                    </tr>
                </tbody>
                </table>
        <p><strong>Code de couleur par région</strong></p>
        <table cellSpacing={0} cellPadding={0} border={0}>
          <tbody>
            <tr>
              <td>&nbsp;<span style={{color: '#f4b400'}}><strong>Les Mini-Entreprises du Brabant Wallon</strong></span>&nbsp;</td>
              <td>&nbsp;<span style={{color: '#db4436'}}><strong>Les Mini-Entreprises de Bruxelles</strong></span>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;<span style={{color: '#62af44'}}><strong>Les Mini-Entreprises du Hainaut</strong></span>&nbsp;</td>
              <td>&nbsp;<span style={{color: '#a61b4a'}}><strong>Les Mini-Entreprises de Liège</strong></span>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;<span style={{color: '#a7b5d7'}}><strong>Les Mini-Entreprises du Luxembourg</strong></span>&nbsp;</td>
              <td>&nbsp;<span style={{color: '#b29189'}}><strong>Les Mini-Entreprises de Namur</strong></span>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <p /><div className="gbs3"><form action="http://www.lje.be/index.php/fr/nos-programmes/mini-entreprise/mini-entreprises-2016-2017?chronoform=correction-donnees-mini-my-maps-2016-2017&event=submit" encType="multipart/form-data" method="post" name="correction-donnees-mini-my-maps-2016-2017" id="chronoform-correction-donnees-mini-my-maps-2016-2017" className="chronoform form-horizontal"><p><strong>Modifier la carte intéractive LJE</strong></p>
            <p>Votre Mini-Entreprise n'apparaît pas sur la carte ?<br />
              Vous remarquez une erreur sur la carte ?</p>
            <p>Merci de compléter le formulaire ci-dessous : </p><div className="form-group gcore-form-row" id="form-row-num-mini"><label htmlFor="num-mini" className="control-label gcore-label-top required_label">Numéro de votre Mini-Entreprise <i className="fa fa-asterisk" style={{color: '#ff0000', fontSize: 9, verticalAlign: 'top'}} /></label>
              <div className="gcore-input-wide gcore-display-table" id="fin-num-mini"><input name="num-mini" id="num-mini" defaultValue placeholder="Numéro de votre Mini-Entreprise" size="40 px" className="validate['required'] form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /><span className="help-block">Ce numéro vous a été communiqué par votre coordinateur ou votre conseiller</span></div></div><div className="form-group gcore-form-row" id="form-row-nom-mini"><label htmlFor="nom-mini" className="control-label gcore-label-top required_label">Nom de votre Mini-Entreprise <i className="fa fa-asterisk" style={{color: '#ff0000', fontSize: 9, verticalAlign: 'top'}} /></label>
              <div className="gcore-input-wide gcore-display-table" id="fin-nom-mini"><input name="nom-mini" id="nom-mini" defaultValue placeholder="Nom de votre Mini-Entreprise, votre produit / service, concept" size="40 px" className="validate['required'] form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /><span className="help-block">Faute de nom, mentionnez votre produit / service ou le concept de ce dernier</span></div></div><div className="form-group gcore-form-row" id="form-row-radio3"><label htmlFor="radio3" className="control-label gcore-label-top gcore-label-checkbox required_label">Que souhaitez-vous faire ? <i className="fa fa-asterisk" style={{color: '#ff0000', fontSize: 9, verticalAlign: 'top'}} /></label>
              <div className="gcore-input-wide gcore-display-table" id="fin-radio3"><div className="gcore-single-column" id="fclmn"><div className="gcore-radio-item" id="fitem"><input name="correction-ajout" id="radio3" defaultValue="correction" className="validate['group:3'] A" title style={{}} data-load-state data-tooltip type="radio" />
                    <label className="control-label gcore-label-checkbox" htmlFor="radio3">Je souhaite corriger une donnée sur la carte</label></div>
                  <div className="gcore-radio-item" id="fitem1"><input name="correction-ajout" id="radio31" defaultValue="ajout" className="validate['group:3'] A" title style={{}} data-load-state data-tooltip type="radio" />
                    <label className="control-label gcore-label-checkbox" htmlFor="radio31">Je souhaite ajouter une donnée à la carte</label></div>
                  <div className="gcore-radio-item" id="fitem2"><input name="correction-ajout" id="radio32" defaultValue="mini" className="validate['group:3'] A" title style={{}} data-load-state data-tooltip type="radio" />
                    <label className="control-label gcore-label-checkbox" htmlFor="radio32">Je souhaite ajouter ma Mini-Entreprise à la carte</label></div></div></div></div><div className="panel panel-default chronoform-container" id="correction-donnees" data-load-state="hidden" style={{display: 'none'}}>
              <div className="panel-heading">Correction de donnée(s)</div>
              <div className="panel-body"><p>Pour ajouter une correction, merci de cliquer sur le bouton vert.</p><div className="chronoform-container multiplier-container" id="chronoform-container-35" data-replacer={0} data-count={1}><div className="chronoform-container multiplier-contents" id="chronoform-container-36" data-load-state="hidden" style={{display: 'none'}}><div className="form-group gcore-form-row" id="form-row-donnee-a-remplacer"><label htmlFor="donnee-a-remplacer" className="control-label gcore-label-left">Donnée à remplacer</label>
                      <div className="gcore-input gcore-display-table" id="fin-donnee-a-remplacer"><input name="donnee-a-remplacer[]" id="donnee-a-remplacer" defaultValue placeholder="Ex : &quot;École&quot;, &quot;Adresse de l'école&quot; ..." size="40 px" className="form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /></div></div><div className="form-group gcore-form-row" id="form-row-nvlle-donnee"><label htmlFor="nvlle-donnee" className="control-label gcore-label-left required_label">Nouvelle donnée <i className="fa fa-asterisk" style={{color: '#ff0000', fontSize: 9, verticalAlign: 'top'}} /></label>
                      <div className="gcore-input gcore-display-table" id="fin-nvlle-donnee"><input name="nvlle-donnee[]" id="nvlle-donnee" defaultValue placeholder="Indiquez, ici, la nouvelle donnée" size="40 px" className="validate['required'] form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /></div></div>
                    <span className="btn btn-danger btn-xs multiplier-remove-button"><i className="fa fa-times fa-lg" /></span>
                  </div>					<span className="btn btn-success btn-sm multiplier-add-button"><i className="fa fa-plus fa-lg" /></span>
                </div><div>&nbsp;</div>
                <hr />
              </div></div><div className="panel panel-default chronoform-container" id="ajout-donnees" data-load-state="hidden" style={{display: 'none'}}>
              <div className="panel-heading">Ajout de donnée(s)</div>
              <div className="panel-body"><p>Pour ajouter une donnée, merci de cliquer sur le bouton vert.</p><div className="chronoform-container multiplier-container" id="chronoform-container-44" data-replacer={0} data-count={1}><div className="chronoform-container multiplier-contents" id="chronoform-container-45" data-load-state="hidden" style={{display: 'none'}}><div className="form-group gcore-form-row" id="form-row-donnee-a-ajouter"><label htmlFor="donnee-a-ajouter" className="control-label gcore-label-left">Type de donnée à ajouter</label>
                      <div className="gcore-input gcore-display-table" id="fin-donnee-a-ajouter"><input name="donnee-a-ajouter[]" id="donnee-a-ajouter" defaultValue placeholder="Ex : &quot;École&quot;, &quot;Adresse de l'école&quot; ..." size="40 px" className="form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /></div></div><div className="form-group gcore-form-row" id="form-row-nvelle-donnee-ajout"><label htmlFor="nvelle-donnee-ajout" className="control-label gcore-label-left required_label">Ajout d'une donnée <i className="fa fa-asterisk" style={{color: '#ff0000', fontSize: 9, verticalAlign: 'top'}} /></label>
                      <div className="gcore-input gcore-display-table" id="fin-nvelle-donnee-ajout"><input name="nvelle-donnee-ajout[]" id="nvelle-donnee-ajout" defaultValue placeholder="Indiquez, ici, la donnée manquante" size="40 px" className="validate['required'] form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /></div></div>
                    <span className="btn btn-danger btn-xs multiplier-remove-button"><i className="fa fa-times fa-lg" /></span>
                  </div>					<span className="btn btn-success btn-sm multiplier-add-button"><i className="fa fa-plus fa-lg" /></span>
                </div><div>&nbsp;</div>
                <hr /></div></div><div className="panel panel-default chronoform-container" id="ajout-mini" style={{display: 'none'}}>
              <div className="panel-heading">Ajouter votre Mini-Entreprise</div>
              <div className="panel-body"><p>Merci de nous communiquer, au minimum, votre établissement scolaire</p><div className="form-group gcore-form-row" id="form-row-ecole-mini"><label htmlFor="ecole-mini" className="control-label gcore-label-top required_label">Votre établissement scolaire <i className="fa fa-asterisk" style={{color: '#ff0000', fontSize: 9, verticalAlign: 'top'}} /></label>
                  <div className="gcore-input-wide gcore-display-table" id="fin-ecole-mini"><input name="ecole-mini" id="ecole-mini" defaultValue placeholder="Votre établissement scolaire" size="40 px" className="validate['required'] form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /></div></div><div className="form-group gcore-form-row" id="form-row-adresse-ecole-mini"><label htmlFor="adresse-ecole-mini" className="control-label gcore-label-top">Adresse de l'établissement scolaire</label>
                  <div className="gcore-input-wide gcore-display-table" id="fin-adresse-ecole-mini"><input name="adresse-ecole-mini" id="adresse-ecole-mini" defaultValue placeholder="Adresse de l'établissement scolaire" size="40 px" className="form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /></div></div><div className="form-group gcore-form-row" id="form-row-facebook"><label htmlFor="facebook" className="control-label gcore-label-top">Votre page Facebook</label>
                  <div className="gcore-input-wide gcore-display-table" id="fin-facebook"><input name="facebook" id="facebook" defaultValue placeholder="Votre page Facebook" size="40 px" className="form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /></div></div><div className="form-group gcore-form-row" id="form-row-website"><label htmlFor="website" className="control-label gcore-label-top">Votre site web</label>
                  <div className="gcore-input-wide gcore-display-table" id="fin-website"><input name="website" id="website" defaultValue placeholder="Votre site web" size="40 px" className="form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /></div></div><div className="form-group gcore-form-row" id="form-row-email"><label htmlFor="email" className="control-label gcore-label-top">L'adresse électronique de la Mini Entreprise</label>
                  <div className="gcore-input-wide gcore-display-table" id="fin-email"><input name="email" id="email" defaultValue placeholder="L'adresse électronique de la Mini Entreprise" size="40 px" className="form-control A" title style={{}} data-inputmask data-load-state data-tooltip type="text" /></div></div><div>&nbsp;</div>
                <hr /></div></div><div className="form-group gcore-form-row" id="form-row-envoi-media"><div className="gcore-input gcore-display-table" id="fin-envoi-media"><div className="gcore-checkbox-item" id="fitem3"><input name="envoi-media" id="envoi-media" defaultValue={1} className="A" title style={{}} data-load-state data-tooltip type="checkbox" />
                  <label className="control-label gcore-label-checkbox" htmlFor="envoi-media">Envoyer une image</label></div><span className="help-block">Cette image figurera sur la carte</span></div></div><div className="panel panel-default chronoform-container" id="envoi-image" style={{display: 'none'}}>
              <div className="panel-heading">Envoyer une image</div>
              <div className="panel-body"><p><font color="#FF0000"><strong>Attention, pour que nous puissions traiter votre image correctement, voici quelques recommandations :</strong></font></p>
                <ol>
                  <li><font color="#FF0000"><strong>Veillez à  ce que son nom commence par le numéro et nom de votre Mini-Entreprise.<br />
                        Exemple : "[Numéro de la Mini]-[Nom de la Mini]-[...]" ;</strong></font></li>
                  <li><font color="#FF0000"><strong>Éviter les noms "par défaut" de type "IMG_001.jpg" ; </strong></font></li>
                  <li><font color="#FF0000"><strong>Évitez les accents (utiliser la lettre sans accent).</strong></font></li>
                </ol><div className="form-group gcore-form-row" id="form-row-selection-image"><label htmlFor="selection-image" className="control-label gcore-label-top required_label">Sélectionnez l'image à envoyer <i className="fa fa-asterisk" style={{color: '#ff0000', fontSize: 9, verticalAlign: 'top'}} /></label>
                  <div className="gcore-input-wide gcore-display-table" id="fin-selection-image"><input name="selection-image" id="selection-image" className="validate['required'] form-control gcore-height-auto A" title style={{}} multiple={0} data-load-state data-tooltip type="file" /><span className="help-block"><p>Seules ces extensions sont acceptées :</p> <p>.BMP<br />   .GIF<br />   .JPE<br />   .JPEG<br />   .JPG<br />   .PNG<br /> </p></span></div></div></div></div><div className="form-group gcore-form-row" id="form-row-captcha"><div className="gcore-subinput-container-wide" id="fitem4"><label htmlFor="captcha1" className="control-label gcore-label-top required_label">Code de sécurité <i className="fa fa-asterisk" style={{color: '#ff0000', fontSize: 9, verticalAlign: 'top'}} /></label>
                <div className="gcore-input-wide pull-left gcore-sub-input gcore-display-table" id="fin-captcha1"><input placeholder size="40 px" className="validate['required'] form-control A" title style={{}} name="captcha" id="captcha1" type="text" /><span className="help-block">Saisissez le code de sécurité pour soumettre le formulaire</span></div></div>
              <div className="gcore-subinput-container-wide" id="fitem5"><div className="gcore-input pull-left gcore-sub-input gcore-display-table" id="fin-captcha2"><img src="http://www.lje.be/index.php?option=com_chronoforms5&act=render&action=load_captcha&chronoform=correction-donnees-mini-my-maps-2016-2017&action_id=16&tvout=ajax&rand=1702699141" alt="captcha" /></div></div></div><p><font color="#FF0000"><strong>Attention, si vous envoyer une image, l'envoi nécesssitera plus ou moins de temps.<br />
                  Après avoir cliqué sur le bouton "soumettre les données" ne fermez pas cette page avant d'avoir eu la confirmation de l'envoi du formulaire</strong></font></p><div className="form-group gcore-form-row" id="form-row-multi-54"><div className="gcore-subinput-container" id="fitem-button54"><div className="gcore-input pull-left gcore-sub-input gcore-display-table" id="fin-button54"><input name="button54" id="button54" defaultValue="Soumettre les données" className="btn btn-default form-control A" style={{}} data-load-state type="submit" /></div></div>
              <div className="gcore-subinput-container" id="fitem-button55"><div className="gcore-input pull-left gcore-sub-input gcore-display-table" id="fin-button55"><input name="button55" id="button55" defaultValue="Effacer les données" className="btn btn-default form-control A" style={{}} data-load-state type="reset" /></div></div></div></form><p className="chrono_credits"><a href="http://www.chronoengine.com" target="_blank" rel = "noopener noreferrer">Powered by ChronoForms - ChronoEngine.com</a></p></div><p /> 	</section>
      );
    }
  });

  export default Entreprise20162018;
