/**
* Особенности монстра по умолчанию.
*/
const DEFAULT_TRAITS = [
	{
		id: 0,
		role: "controller",
		Name: "Откат",
		description: "Уменьшите вдвое урон от атаки, чтобы отбросить цель на расстояние до 15 футов".
	},
	{
		id: 1,
		role: "controller",
		Name: "Отвлечение",
		description: "Уменьшите вдвое урон от атаки, чтобы получить преимущество при следующем броске атаки по цели".
	},
	{
		id: 2,
		role: "controller",
		name: "Занять позицию",
		description: "Уменьшите вдвое урон от своей атаки, чтобы позволить союзнику потратить свою реакцию и переместиться на половину своей скорости (не провоцируя атаки цели)".
	},
	{
		id: 3,
		role: "controller",
		Name: "Боковой шаг",
		description: "Уменьшите вдвое урон от своей атаки, чтобы переместить себя и свою цель на 5 футов в любом направлении".
	},
	{
		id: 4,
		role: "controller",
		name: "Калечащий удар",
		description: "Уменьшите вдвое урон от своей атаки, чтобы снизить скорость цели до 0 футов до начала вашего следующего хода".
	},
	{
		id: 5,
		role: "defender",
		name: "Крепкая оборона",
		description: "Ваша защита непробиваема. Получите +2 КЗ".
	},
	{
		id: 6,
		role: "defender",
		Name: "Прикрываю твою спину",
		description: "Находясь рядом с союзником или атакующей целью, вы можете потратить свою реакцию, чтобы перенаправить атаку на себя".
	},
	{
		id: 7,
		role: "defender",
		Name: "Ты не можешь уйти",
		description: "Цели всегда провоцируют атаки, даже если они совершают действие "Отход". Кроме того, когда вы попадаете атакой по возможности, скорость цели становится равной 0 до конца хода".
	},
	{
		id: 8,
		role: "defender",
		Name: "Стой за мной",
		description: "Союзники в пределах 5 футов от вас считаются находящимися в укрытии на три четверти".
	},
	{
		id: 9,
		role: "defender",
		Name: "Смотри на меня",
		description: "Когда вы атакуете цель, вы можете пометить ее. Помеченная цель имеет -2 к любому броску атаки, сделанному по любой цели кроме вас. Вы можете иметь одну активную метку за раз, и метки не складываются".
	},
	{
		id: 10,
		role: "lurker",
		Name: "Спрятаться на виду",
		описание: "Вы можете попытаться спрятаться даже за легким укрытием."
	},
	{
		id: 11,
		role: "lurker",
		Name: "Удар в спину",
		description: "Если у вас есть преимущество в атаке, добавьте свой уровень к урону".
	},
	{
		id: 12,
		role: "lurker",
		name: "Хитрое действие",
		description: "Бонусным действием вы можете совершить Рывок, Отход или Спрятаться".
	},
	{
		id: 13,
		role: "lurker",
		name: " Камуфляжж ",
		description: "Когда вы спрятаны, враги не могут обнаружить вас пассивным восприятием, и у них есть помеха на активные проверки, совершаемые для вашего обнаружения".
	},
	{
		id: 14,
		role: "lurker",
		name: "Партизан",
		description: "Когда вы совершаете атаку, находясь в укрытии, вы не раскрываете себя и можете оставаться в укрытии".
	},
	{
		id: 15,
		role: "sniper",
		Name: "Замри на месте",
		description: "Вы совершаете броски атаки с преимуществом, если ваша цель переместилась менее чем на 10 футов во время своего последнего хода".
	},
	{
		id: 16,
		role: "sniper",
		Name: "Я вижу тебя",
		description: "Ваши дальнобойные атаки игнорируют укрытие на половину и на три четверти".
	},
	{
		id: 17,
		role: "sniper",
		name: "В следующий раз",
		описание: "Если вы промахнетесь по цели, у вас будет преимущество при следующей атаке по той же цели."
	},
	{
		id: 18,
		role: "sniper",
		name: "Осколочный выстрел",
		description: "Когда вы совершаете успешную атаку, вы можете нанести урон, равный вашему уровню, всем в пределах 5 футов от вашей цели (один раз за раунд)".
	},
	{
		id: 19,
		role: "sniper",
		name: "Рикошет",
		description: "Если ваша атака промахивается, вы можете потратить реакцию, чтобы провести еще одну атаку по другой цели по вашему выбору в пределах 15 футов от исходной цели".
	},
	{
		id: 20,
		role: "striker",
		name: "Раскол",
		description: "Вы можете атаковать две соседние цели, находящиеся в пределах досягаемости, нанося каждой полный урон".
	},
	{
		id: 21,
		role: "striker",
		Name: " Кровавая ярость ",
		description: "Когда вы ранены, вы впадаете в ярость; -2 КЗ и +2 к атаке".
	},
	{
		id: 22,
		role: "striker",
		name: "Дикое нападение",
		description: "Один раз за ход добавьте свой уровень к урону от атаки".
	},
	{
		id: 23,
		role: "striker",
		name: "Давящая Атака",
		description: "Вы совершаете с преимуществом броски атаки против окровавленных целей (менее 50% хитов)".
	},
	{
		id: 24,
		role: "striker",
		Name: "Месть",
		description: "Наносите дополнительный урон, равный вашему уровню, всем, кто причинил вам урон в предыдущем раунде".
	},
	{
		id: 25,
		role: "scout",
		Name: "Тебе не спрятаться",
		description: "Вы имеете преимущество при обнаружении скрытых врагов. Любой враг, которого вы видите, также виден вашим союзникам."
	},
	{
		id: 26,
		role: "scout",
		название: "Легконогий",
		description: "Вы можете совершить Отход или Рывок бонусным действием. Когда враг перемещается рядом с вами, вы можете потратить свою реакцию, чтобы отойти со скоростью, равной половине вашей скорости".
	},
	{
		id: 27,
		role: "scout",
		name: "Исследователь",
		description: "Вы можете взбираться и передвигаться по труднопроходимой местности без каких-либо штрафов применимых к вашему движению".
	},
	{
		id: 28,
		role: "scout",
		name: "Движение клещей",
		description: "Когда союзник перемещается в упор к врагу, вы можете потратить свою реакцию, чтобы двигаться с вашей скоростью к тому же врагу".
	},
	{
		id: 29,
		role: "scout",
		Name: "Тяжело попасть",
		description: "Когда вы стоите и <b>не опутаны</b> , атаки против вас имеют помеху, если только вы не находитесь рядом с двумя или более врагами".
	},
	{
		id: 30,
		role: "supporter",
		name: "Руководство",
		description: "Союзники в пределах 10 футов от вас совершают броски атаки с преимуществом".
	},
	{
		id: 31,
		role: "supporter",
		name: "Защита",
		description: "Союзники в пределах 10 футов от вас получают +2 КЗ".
	},
	{
		id: 32,
		role: "supporter",
		Name: "Свирепость",
		description: "Союзники в пределах 10 футов от вас получают бонус к урону, равный вашему уровню".
	},
	{
		id: 33,
		role: "supporter",
		Name: "Объединяющий клич",
		description: "Уменьшите вдвое урон от своей атаки, чтобы снять состояние с союзника".
	},
	{
		id: 34,
		role: "supporter",
		name: "Командир",
		description: "Вместо броска атаки вы можете приказать союзнику атаковать выбранную вами цель (один раз за раунд)".
	},
	{
		id: 35,
		role: null,
		name: "Прилипала",
		description: "Вы прилипаете ко всему, к чему прикасаетесь. Любое огромное или меньшее существо, прилипшее к вам, также становится схваченным, и проверки характеристик, сделанные для выхода из захвата, совершаются с помехой".
	},
	{
		id: 36,
		role: null,
		Name: "Агрессивный",
		description: "бонусным действием вы можете двигаться со своей скоростью к видимому врагу".
	},
	{
		id: 37,
		role: null,
		name: "Тревога",
		description: "Когда вы получаете урон, все другие существа той же породы в пределах 240 футов знают о вашей боли".
	},
	{
		id: 38,
		role: null,
		название: "Чужой разум",
		description: "Вы совершаете с преимуществом спасброски Мудрости".
	},
	{
		id: 39,
		role: null,
		name: "Аморфный",
		description: "Вы можете пройти через пространство шириной всего 1 дюйм, не протискиваясь".
	},
	{
		id: 40,
		role: null,
		Name: "Магическая защита",
		description: "Вы устойчивы ко всем магическим повреждениям".
	},
	{
		id: 41,
		role: null,
		name: "Аура: Антимагия ",
		description: "Любое существо в пределах 10 футов от вас получает помеху при использовании магических заклинаний".
	},
	{
		id: 42,
		role: null,
		name: "Аура: Урон",
		description: "Пространство вокруг вас опасно. Существа получают урон, равный вашему уровню, когда входят в вашу ауру или начинают свой ход внутри нее".
	},
	{
		id: 43,
		role: null,
		name: "Аура: Вредоносная",
		description: "Все враги в пределах 10 футов от вас совершают спасброски с помехой".
	},
	{
		id: 44,
		role: null,
		name: "Аура: Запутывание",
		description: "Земля в радиусе 10 футов вокруг вас представляет собой труднопроходимую местность. Каждое существо, которое начинает свой ход в этой области, должно преуспеть в спасброске Силы, иначе его скорость будет снижена до 0 до начала его следующего хода".
	},
	{
		id: 45,
		role: null,
		name: "Аура: Вонь",
		description: "Воздух вокруг вас гнилостный. Существа в пределах 10 футов от вас совершают броски атаки с помехой, если только они не обладают чертой <i> Зловоние </i> " .
	},
	{
		id: 46,
		role: null,
		name: "Колючая шкура",
		description: "В начале вашего хода нанесите колющий урон, равный вашему уровню, любому существу, которое вас схватило".
	},
	{
		id: 47,
		role: null,
		Name: "Кровавое безумие",
		description: "Вы совершаете с преимуществом броски атаки в ближнем бою против любого существа, у которого нет всех своих хитов".
	},
	{
		id: 48,
		role: null,
		Name: "Атака с натиском",
		description: "Если вы продвинулись более чем на 20 футов по прямой к своей цели, сделайте бросок атаки ближнего боя с преимуществом. При попадании вы сбиваете цель с ног в дополнение к любому другому эффекту".
	},
	{
		id: 49,
		role: null,
		name: "Сжатие",
		description: "В начале вашего хода нанесите дробящий урон, равный вашему уровню, любому существу, которое вы схватили".
	},
	{
		id: 50,
		role: null,
		name: "Коррозионное тело",
		description: "Любое существо, которое касается вас или атакует вас в ближнем бою, получает урон, равный вашему уровню. Любое оружие, которое бьет вас, получает постоянный и кумулятивный штраф -1 к броскам урона — оружие уничтожается, если штраф достигает -5. "
	},
	{
		id: 51,
		role: null,
		name: "Критическая защита",
		description: "Критические удары по вам считаются обычными ударами, если только вы уже не окровавлены".
	},
	{
		id: 52,
		role: null,
		name: "Критическая ярость",
		description: "Ваши атаки наносят критический удар при броске 19-20".
	},
	{
		id: 53,
		role: null,
		Name: "Поглощение урона",
		description: "Всякий раз, когда вы получаете урон определенного типа, вы вместо этого восстанавливаете столько же хитов".
	},
	{
		id: 54,
		role: null,
		name: "Перенос урона",
		description: "Когда вы получаете урон от атаки, вы можете передать половину этого урона другому существу в пределах 5 футов от вас".
	},
	{
		id: 55,
		role: null,
		name: "Опасное тело",
		description: "Любой враг, который касается вас или попадает по вам атакой ближнего боя, находясь в пределах 5 футов от вас, получает урон, равный вашему уровню".
	},
	{
		id: 56,
		role: null,
		Name: "Распад",
		description: "Когда вы умираете, ваше тело превращается в пыль. Ваше оружие и снаряжение остается".
	},
	{
		id: 57,
		role: null,
		Name: " Драконье дыхание ",
		description: "Вы можете дышать драконьим пламенем в качестве атаки или использовать его для разжигания небольших костров".
	},
	{
		id: 58,
		role: null,
		name: "Земное скольжениее",
		description: "Вы можете передвигаться со скоростью копания по немагической необработанной земле и камню. При этом вы не тревожите материал, через который проходите".
	},
	{
		id: 59,
		role: null,
		Name: "Побег",
		description: "Когда ваши хиты опустятся до 0 за пределами вашего логова, вы вместо этого убегаете и бежите в свое логово. Вы остаетесь там, парализованные и отдыхающие, пока не восстановите по крайней мере 50% своих хитов".
	},
	{
		id: 60,
		role: null,
		name: "Взрыв",
		description: "Когда ваши хиты падают до 0, ваше тело взрывается и наносит урон всем в радиусе 5 футов. Вы можете начать детонацию в свой ход бонусным действием; вы взрываетесь в начале своего следующего хода".
	},
	{
		id: 61,
		role: null,
		Name: "Ложная внешность",
		description: "Когда остаешься неподвижным, тебя невозможно отличить от элемента местного пейзажа".
	},
	{
		id: 62,
		role: null,
		Name: "Фейский разум",
		description: "Вы совершаете с преимуществом спасброски от очарования, и магия не может вас усыпить".
	},
	{
		id: 63,
		role: null,
		name: "Полет",
		description: "Вы можете летать со своей скоростью. Во время полета вы должны двигаться со всей скоростью своего движения или приземлиться — если вы также не можете парить. Начало полета провоцирует атаки, даже если вы совершаете <i> Отход </i> " .
	},
	{
		id: 64,
		role: null,
		name: "Атака в полете",
		description: "Вы не провоцируете атаку, когда вылетаете из зоны досягаемости врага".
	},
	{
		id: 65,
		role: null,
		name: "Свобода передвижения",
		description: "Вы игнорируете труднопроходимую местность, и магические эффекты не могут снизить вашу скорость или заставить ее быть ограниченной. Вы можете потратить 5 футов движения, чтобы вырваться из немагических ограничений или захвата".
	},
	{
		id: 66,
		role: null,
		name: "Борец",
		description: "Вы совершаете броски атаки с преимуществом против любой цели, которую вы схватили. Кроме того, при захвате цели любой урон, который вы получаете от атаки, делится 50/50 с вашей жертвой".
	},
	{
		id: 67,
		role: null,
		name: "Парение",
		description: "Вы можете зависать в воздухе в течение 6 секунд, прежде чем вам нужно будет двигаться".
	},
	{
		id: 68,
		role: null,
		Название: "Бессмертный",
		description: "Вы не можете быть убиты, если ваши хиты не опустятся до 0 с помощью определенного типа атаки. Любая другая форма атаки вместо этого уменьшит ваши хиты до 1".
	},
	{
		id: 69,
		role: null,
		имя: "Неизменяемая форма",
		description: "Вы невосприимчивы к любому заклинанию или эффекту, который может изменить вашу форму".
	},
	{
		id: 70,
		role: null,
		Название: "Непробиваемый",
		description: "Вы устойчивы ко всем немагическим повреждениям".
	},
	{
		id: 71,
		role: null,
		Name: "Бестелесный",
		description: "Вы можете пройти сквозь любую твердую немагическую материю и не можете быть поражены никаким немагическим оружием или атакой".
	},
	{
		id: 72,
		role: null,
		name: "Неукротимый",
		description: "Вы невосприимчивы к любым эффектам, которые могут изменить ваш разум или волю".
	},
	{
		id: 73,
		role: null,
		Name: "Непостижимый",
		description: "Вы невосприимчивы к любому эффекту, который мог бы считывать ваши эмоции или читать ваши мысли, а также к любому заклинанию предсказания, действию которого вы решили не поддаваться.
	},
	{
		id: 74,
		role: null,
		Name: "Невидимый",
		description: "Вас нельзя увидеть".
	},
	{
		id: 75,
		role: null,
		Name: "Пожиратель жизни",
		description: "Когда вы наносите урон, уменьшающий хиты существа до 0, это существо не может быть воскрешено никакими средствами, кроме заклинания желания".
	},
	{
		id: 76,
		role: null,
		name: "Сопротивление магии",
		description: "Вы совершаете с преимуществом спасброски от заклинаний и других магических эффектов".
	},
	{
		id: 77,
		role: null,
		name: "Волшебное оружие",
		description: "Ваши атаки оружием считаются магическими с целью преодоления устойчиковсти к урону".
	},
	{
		id: 78,
		role: null,
		name: "Боевое преимущество",
		description: "Один раз за ход вы можете нанести дополнительный урон, равный вашему уровню, когда вы попадаете по цель, возле которой в пределах 5 футов находится ваш союзник".
	},
	{
		id: 79,
		role: null,
		name: "Парирование",
		description: "Вы можете потратить свою реакцию, чтобы получить +3 КЗ против одной атаки ближнего боя, которую вы видите".
	},
	{
		id: 80,
		role: null,
		Name: "Ярость",
		Description: "Когда вы уменьшаете хиты цели до 0 с помощью атаки ближнего боя в свой ход, вы можете потратить бонусное действие, чтобы переместиться на половину своей скорости и атаковать другую цель".
	},
	{
		id: 81,
		role: null,
		Название: "Безрассудный",
		description: "В начале вашего хода вы можете получить преимущество во всех атаках ближнего боя, которые вы совершаете в этом ходу. Однако все атаки против вас получают преимущество до начала вашего следующего хода".
	},
	{
		id: 82,
		role: null,
		name: "Перенаправление",
		description: "Когда вы находитесь в пределах 5 футов от союзника, вы можете вместо этого перенаправить любую одиночную атаку, направленную против вас, на вашего союзника".
	},
	{
		id: 83,
		role: null,
		name: "Регенерация",
		description: "Вы восстанавливаете очки жизни в начале вашего хода, равные вашему максимальному количеству хитов / 10. Эта регенерация останавливается на 1 ход, если вы получили урон определенного типа (огонь/кислота/молния/и т. д.) или если ваши хиты опущены до 0".
	},
	{
		id: 84,
		role: null,
		Название: "Неумолимый",
		description: "В первый раз, когда ваши хиты падают до 0 после длинного отдыха, вместо этого ваши хиты уменьшаются до 1".
	},
	{
		id: 85,
		role: null,
		name: "Осадное существо",
		description: "Вы наносите двойной урон объектам и строениям".
	},
	{
		id: 86,
		role: null,
		name: "Скрытность в тенях",
		description: "Находясь в тусклом свете или в темноте, вы можете совершить действие "Спрятаться" бонусным действием".
	},
	{
		id: 87,
		role: null,
		Name: "Сдвиг",
		description: "Вы можете совершить <i> Отход </i> бонусным действием".
	},
	{
		id: 88,
		role: null,
		name: "Скользкий",
		description: "Вы совершаете с преимуществом проверки характеристик и спасброски, сделанных чтобы избежать захвата".
	},
	{
		id: 89,
		role: null,
		name: "Паучье восхождение",
		description: "Вы можете карабкаться по сложным поверхностям, в том числе вверх ногами по потолку, без необходимости совершать проверку характеристик".
	},
	{
		id: 90,
		role: null,
		name: "Деление",
		description: "Когда вы ранены, вы разделяетесь на две меньшие копии. Каждая новая копия имеет хиты, равные половине ваших оставшихся хитов , и действует независимо ".
	},
	{
		id: 91,
		role: null,
		Name: "Устойчивый",
		description: "Вы совершаете с преимуществом спасброски Силы и Ловкости против эффектов, которые могут сбить вас с ног".
	},
	{
		id: 92,
		role: null,
		name: "Рой",
		description: "Вы можете занимать пространство другого существа и наоборот. Вы получаете преимущество при атаках против любого существа, которое занимает ваше пространство".
	},
	{
		id: 93,
		role: null,
		name: "Командная работа",
		description: "Вы совершаете броски атаки с преимуществом, когда ваша цель находится в пределах 5 футов от ничем не сдерживаемого союзника".
	},
	{
		id: 94,
		role: null,
		Name: "Сверхъестественные чувства",
		description: "Если вы не выведены из строя, вас нельзя застать врасплох".
	},
	{
		id: 95,
		role: null,
		Name: "Бессмертная стойкость",
		description: "Если урон снижает ваши хиты до 0, совершите спасбросок Телосложения КС 5 + полученный урон. Вместо этого при успехе ваши хиты опускаются до 1".
	},
	{
		id: 96,
		role: null,
		Name: "Бодрствующий",
		description: "Вас никогда не застанут спящим".
	},
	{
		id: 97,
		role: null,
		name: "Боевая магия",
		description: "Когда вы используете свое действие, чтобы сотворить заклинание, вы можете совершить одну атаку оружием бонусным действием".
	}
];

export default DEFAULT_TRAITS;
