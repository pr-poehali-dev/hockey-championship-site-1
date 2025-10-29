import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  period: string;
  isLive: boolean;
  time?: string;
  date?: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  games: number;
  wins: number;
  losses: number;
  points: number;
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

const Index = () => {
  const [liveMatches] = useState<Match[]>([
    { id: 1, homeTeam: 'Спартак', awayTeam: 'Динамо', homeScore: 3, awayScore: 2, period: '2 период', isLive: true },
    { id: 2, homeTeam: 'ЦСКА', awayTeam: 'СКА', homeScore: 1, awayScore: 1, period: '1 период', isLive: true },
  ]);

  const [schedule] = useState<Match[]>([
    { id: 3, homeTeam: 'Локомотив', awayTeam: 'Ак Барс', homeScore: 0, awayScore: 0, period: '', isLive: false, time: '19:00', date: '30 окт' },
    { id: 4, homeTeam: 'Металлург', awayTeam: 'Авангард', homeScore: 0, awayScore: 0, period: '', isLive: false, time: '19:30', date: '30 окт' },
    { id: 5, homeTeam: 'Салават Юлаев', awayTeam: 'Трактор', homeScore: 0, awayScore: 0, period: '', isLive: false, time: '17:00', date: '31 окт' },
  ]);

  const [teams] = useState<Team[]>([
    { id: 1, name: 'ЦСКА', logo: '🏒', games: 20, wins: 15, losses: 5, points: 45 },
    { id: 2, name: 'СКА', logo: '⚡', games: 20, wins: 14, losses: 6, points: 42 },
    { id: 3, name: 'Спартак', logo: '🔴', games: 20, wins: 13, losses: 7, points: 39 },
    { id: 4, name: 'Динамо', logo: '💙', games: 20, wins: 12, losses: 8, points: 36 },
    { id: 5, name: 'Локомотив', logo: '🚂', games: 20, wins: 11, losses: 9, points: 33 },
    { id: 6, name: 'Ак Барс', logo: '❄️', games: 20, wins: 10, losses: 10, points: 30 },
  ]);

  const [news] = useState<NewsItem[]>([
    { id: 1, title: 'ЦСКА одержал уверенную победу над СКА', date: '28 окт 2025', excerpt: 'Московский клуб провёл один из лучших матчей сезона' },
    { id: 2, title: 'Рекорд сезона: Спартак забросил 7 шайб', date: '27 окт 2025', excerpt: 'Красно-белые установили новый рекорд результативности' },
    { id: 3, title: 'Динамо усилится двумя игроками к плей-офф', date: '26 окт 2025', excerpt: 'Руководство клуба объявило о подписании контрактов' },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🏒</div>
              <div>
                <h1 className="text-2xl font-bold text-secondary">Хоккейный Чемпионат</h1>
                <p className="text-sm text-muted-foreground">Сезон 2025</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#live" className="text-sm font-medium hover:text-primary transition-colors">Прямой эфир</a>
              <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
              <a href="#teams" className="text-sm font-medium hover:text-primary transition-colors">Команды</a>
              <a href="#table" className="text-sm font-medium hover:text-primary transition-colors">Таблица</a>
              <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section id="live">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <h2 className="text-3xl font-bold">Прямой эфир</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {liveMatches.map((match) => (
              <Card key={match.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="destructive" className="gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    LIVE
                  </Badge>
                  <span className="text-sm font-medium text-muted-foreground">{match.period}</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{match.homeTeam}</span>
                    <span className="text-4xl font-bold text-primary">{match.homeScore}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{match.awayTeam}</span>
                    <span className="text-4xl font-bold text-primary">{match.awayScore}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="schedule">
          <h2 className="text-3xl font-bold mb-6">Расписание</h2>
          
          <div className="space-y-3">
            {schedule.map((match) => (
              <Card key={match.id} className="p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-center min-w-[80px]">
                      <div className="text-sm text-muted-foreground">{match.date}</div>
                      <div className="text-lg font-semibold">{match.time}</div>
                    </div>
                    
                    <div className="flex items-center gap-4 flex-1">
                      <span className="font-medium text-right flex-1">{match.homeTeam}</span>
                      <span className="text-muted-foreground">vs</span>
                      <span className="font-medium flex-1">{match.awayTeam}</span>
                    </div>
                  </div>
                  
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="teams">
          <h2 className="text-3xl font-bold mb-6">Команды</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {teams.map((team) => (
              <Card key={team.id} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-5xl mb-3">{team.logo}</div>
                <h3 className="font-semibold">{team.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{team.points} очков</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="table">
          <h2 className="text-3xl font-bold mb-6">Турнирная таблица</h2>
          
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">#</th>
                    <th className="text-left p-4 font-semibold">Команда</th>
                    <th className="text-center p-4 font-semibold">И</th>
                    <th className="text-center p-4 font-semibold">В</th>
                    <th className="text-center p-4 font-semibold">П</th>
                    <th className="text-center p-4 font-semibold">О</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, index) => (
                    <tr key={team.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium">{index + 1}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{team.logo}</span>
                          <span className="font-semibold">{team.name}</span>
                        </div>
                      </td>
                      <td className="text-center p-4">{team.games}</td>
                      <td className="text-center p-4 text-green-600 font-semibold">{team.wins}</td>
                      <td className="text-center p-4 text-red-600 font-semibold">{team.losses}</td>
                      <td className="text-center p-4 font-bold text-primary">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <section id="news">
          <h2 className="text-3xl font-bold mb-6">Новости</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-2 mb-3">
                  <Icon name="Newspaper" size={20} className="text-primary mt-1" />
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 leading-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.excerpt}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t bg-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏒</span>
              <span className="font-semibold">Хоккейный Чемпионат 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
