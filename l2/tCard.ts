class _200001_tCard extends l2_html._200001_Special_Base {

	public img = new l2_fieldTypes.Input(this, {
		desc: 'url img', type: 'text', group: 'principal',elType:'attr'
	});

	public text = new l2_fieldTypes.Input(this, {
		desc: 'text', type: 'text', group: 'principal',elType:'attr'
	});

	public title = new l2_fieldTypes.Input(this, {
		desc: 'title', type: 'text', group: 'principal',elType:'attr'
	});

	public text2 = new l2_fieldTypes.Input(this, {
		desc: 'text', type: 'text',elType:'attr'
	});

	/**
	 * Comentário avançado
	 * @name Teste
	 * @param value - recebe o valor do title2
	 * @author Lucas
	 * 
	 * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
	 * 
	 * @see {@link http://example.com/@internal | the @internal tag}
   *
	 */
	public title2 = new l2_fieldTypes.Input(this, {
		desc: 'title', type: 'text',elType:'attr'
	});

	public onClick = new l2_fieldTypes.Input(this, {
		desc: 'title', type: 'text', group: 'principal',elType:'attr'
	});

	public render(): HTMLElement {

		super.createEL('t-card');
		l2_fieldTypes.renderAllFields(this.el, this);
		return this.el;

	}


	// 3 - Search Page

	public static readonly _SearchDetails: l2_html.SearchType = {
		section: l2_html.PCategories.layout,
		desc: 'section',
		tags: ['section'],
		childrenTags: ['!elChild', '!restricted'],
		examples: [
		]
	}

}
