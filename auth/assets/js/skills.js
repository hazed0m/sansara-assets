var skillsList = [];
function skillsInitialize(element)
{
	skillsList = [];
	let newList = JSON.parse(element);
	$(newList).each(function(index,item){
		let obj = {
			level: item.level,
			exp: item.exp,
			maxexp:item.maxexp
		};
		skillsList.push(obj);
	});
	wrapperRefresh();
};
function wrapperRefresh()
{
	$('.block-wrap').each(function(index,item){
		$(item).find('.level-numb').text(skillsList[index].level);
		$(item).find('.line-numb .current').text(skillsList[index].exp);
		$(item).find('.line-numb .max').text(skillsList[index].maxexp);
		let currentWidth = (skillsList[index].exp*100)/skillsList[index].maxexp;
		$(item).find('.line-thumb').css('width',currentWidth+'%');
	});
}; 